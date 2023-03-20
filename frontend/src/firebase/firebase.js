// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7IHeSw3UPHBf_eAbjr-3npfDP2AW7GTg",
  authDomain: "rommatesfinder.firebaseapp.com",
  projectId: "rommatesfinder",
  storageBucket: "rommatesfinder.appspot.com",
  messagingSenderId: "127396216537",
  appId: "1:127396216537:web:8d4df47521f44670d6c8c8",
  measurementId: "G-WLHSE1R9QB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = firebase.storage();
return storage;
