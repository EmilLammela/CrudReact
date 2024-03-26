// Profile.js
import React, { useState, useEffect } from 'react';
import '../css/profile.css';
import firebase from '../firebaseConfig';
import TaskEditor from '../pages/task_editor'; // Import TaskEditor component

const Profile = () => {
  const [code, setCode] = useState(localStorage.getItem('profileCode') || '');
  const [message, setMessage] = useState('');
  const [showTaskEditor, setShowTaskEditor] = useState(false);

  const handleInputChange = (e) => {
    setCode(e.target.value);
  };

  const handleCreateProfile = () => {
    if (!code.trim()) {
      setMessage('Please enter a profile code.');
      return;
    }

    const profileRef = firebase.database().ref('profiles').child(code);

    profileRef.once('value', (snapshot) => {
      if (snapshot.exists()) {
        setMessage('Profile already exists.');
        localStorage.setItem('profileCode', code);
        setShowTaskEditor(true);
      } else {
        const newProfileData = {
          profileCode: code,
          // Other profile properties...
        };

        profileRef.set(newProfileData)
          .then(() => {
            setMessage('Profile created successfully.');
            localStorage.setItem('profileCode', code);
            setShowTaskEditor(true);
          })
          .catch((error) => {
            setMessage('Error creating profile: ' + error.message);
          });
      }
    }).catch((error) => {
      setMessage('Error checking profile: ' + error.message);
    });
  };

  const handleClearLocalStorage = () => {
    localStorage.removeItem('profileCode');
    setCode('');
    setShowTaskEditor(false);
    setMessage('Local storage cleared.');
  };

  useEffect(() => {
    const savedProfileCode = localStorage.getItem('profileCode');
    if (savedProfileCode) {
      setCode(savedProfileCode);
      setShowTaskEditor(true);
    }
  }, []);

  return (
    <div>
      <input
        className='code_input'
        type='text'
        placeholder='Input a code for your profile'
        value={code}
        onChange={handleInputChange}
      />
      <button onClick={handleCreateProfile}>Select Profile</button>
      <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
      <div className="message">{message}</div>
      {showTaskEditor && <TaskEditor profileCode={code} />}
    </div>
  );
};

export default Profile;
