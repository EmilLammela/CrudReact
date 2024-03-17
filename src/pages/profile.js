import React, { useState } from 'react';
import '../css/profile.css';
import firebase from '../firebaseConfig';

const Profile = () => {
    const [code, setCode] = useState('');
    
    const handleInputChange = (e) => {
        setCode(e.target.value);
    };

    const handleCreateProfile = () => {
        const profileRef = firebase.ref('profiles').child(code);
      
        profileRef.once('value', (snapshot) => {
          if (snapshot.exists()) {
            console.log('Profile already exists.');
          } else {
            profileRef.set({
              // Set data for the new profile
            })
            .then(() => {
              console.log('Profile created successfully.');
            })
            .catch((error) => {
              console.error('Error creating profile:', error);
            });
          }
        }).catch((error) => {
          console.error('Error checking profile:', error);
        });
      };

    return (
        <div>
            <input 
                className='code_input'
                type='text'
                placeholder='Input a code for your profile'
                value={code}
                onChange={handleInputChange}
            />
            <button onClick={handleCreateProfile}>Create Profile</button>
        </div>
    );
};

export default Profile;
