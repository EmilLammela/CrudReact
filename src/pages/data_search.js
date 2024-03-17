import React, { useEffect, useState } from 'react';
import firebase from '../firebaseConfig'; // Adjust the path based on your file structure

const DataSearch = () => {
  const [data, setData] = useState(null);
  const [dataPath, setDataPath] = useState('profiles'); // Default path

  useEffect(() => {
    const fetchData = async () => {
      if (dataPath.trim() === '') {
        // Skip fetching if dataPath is empty
        setData(null);
        return;
      }

      const dbRef = firebase.database().ref(dataPath);
      dbRef.on('value', snapshot => {
        setData(snapshot.val());
      });
    };

    fetchData();

    // Cleanup listener when component unmounts
    return () => {
      if (dataPath.trim() !== '') {
        firebase.database().ref(dataPath).off();
      }
    };
  }, [dataPath]);

  const handleInputChange = event => {
    setDataPath(event.target.value);
  };

  return (
    <div>
      <h2>Data Search</h2>
      <label htmlFor="dataPathInput">Enter Data Path:</label>
      <input
        type="text"
        id="dataPathInput"
        value={dataPath}
        onChange={handleInputChange}
      />
      {dataPath.trim() === '' ? (
        <p>Please enter a data path.</p>
      ) : data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataSearch;
