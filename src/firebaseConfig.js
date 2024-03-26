// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmtDJhZaq6KUc_MR5tsKbRvkEu_KANOQk",
  authDomain: "reactcrud-9052d.firebaseapp.com",
  databaseURL: "https://reactcrud-9052d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "reactcrud-9052d",
  storageBucket: "reactcrud-9052d.appspot.com",
  messagingSenderId: "668274956037",
  appId: "1:668274956037:web:19f06bc4d0afd92bd1896c",
  measurementId: "G-RY3L5GE6KY"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;