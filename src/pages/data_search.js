import React, { useEffect, useState } from 'react';
import firebase from '../firebaseConfig'; // Adjust the path based on your file structure

const DataSearch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const dbRef = firebase.database().ref('data'); // Update with your actual data path
      dbRef.on('value', snapshot => {
        setData(snapshot.val());
      });
    };

    fetchData();

    // Cleanup listener when component unmounts
    return () => {
      firebase.database().ref('data').off(); // Update with your actual data path
    };
  }, []);

  return (
    <div>
      <h2>Data Search</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataSearch;
