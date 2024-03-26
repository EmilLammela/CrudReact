import React, { useState, useEffect } from 'react';
import firebase from '../firebaseConfig';

const TasksPage = ({ profileCode }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const profileTasksRef = firebase.database().ref(`profiles/${profileCode}/tasks`);

    profileTasksRef.on('value', (snapshot) => {
      const tasksData = snapshot.val();
      if (tasksData) {
        const tasksList = Object.keys(tasksData).map((taskId) => ({
          id: taskId,
          name: tasksData[taskId].name,
          message: tasksData[taskId].message,
        }));
        setTasks(tasksList);
      } else {
        setTasks([]);
      }
      setLoading(false);
    });

    // Cleanup listener on component unmount
    return () => profileTasksRef.off();
  }, [profileCode]);

  const handleDeleteTask = (taskId) => {
    const taskRef = firebase.database().ref(`profiles/${profileCode}/tasks/${taskId}`);
    taskRef
      .remove()
      .then(() => {
        console.log('Task deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting task:', error.message);
      });
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  return (
    <div>
      <h1>Tasks for Profile: {profileCode}</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}: </strong>
            {task.message}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
