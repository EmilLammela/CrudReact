// TaskEditor.js
import React, { useState } from 'react';
import firebase from '../firebaseConfig';

const TaskEditor = ({ profileCode }) => {
  const [taskName, setTaskName] = useState('');
  const [taskMessage, setTaskMessage] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setTaskMessage(e.target.value);
  };

  const handleCreateTask = () => {
    if (!taskName.trim() || !taskMessage.trim()) {
      setMessage('Please enter both task name and message.');
      return;
    }

    const profileRef = firebase.database().ref(`profiles/${profileCode}/tasks`);
    const taskRef = profileRef.push();

    taskRef
      .set({
        name: taskName,
        message: taskMessage,
      })
      .then(() => {
        setMessage('Task created successfully.');
        setTaskName('');
        setTaskMessage('');
      })
      .catch((error) => {
        setMessage('Error creating task: ' + error.message);
      });
  };

  return (
    <div className="task-editor">
      <input
        className='task_input'
        type='text'
        placeholder='Enter task name'
        value={taskName}
        onChange={handleNameChange}
      />
      <input
        className='task_input'
        type='text'
        placeholder='Enter task message'
        value={taskMessage}
        onChange={handleMessageChange}
      />
      <button onClick={handleCreateTask}>Create Task</button>
      <div className="task-message">{message}</div>
    </div>
  );
};

export default TaskEditor;
