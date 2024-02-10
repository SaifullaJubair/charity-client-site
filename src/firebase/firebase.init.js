// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS_ti2HOImm4r4XqolLOQkaaWD2UPIERw",
  authDomain: "charity-e124d.firebaseapp.com",
  projectId: "charity-e124d",
  storageBucket: "charity-e124d.appspot.com",
  messagingSenderId: "719680624441",
  appId: "1:719680624441:web:d706f74f8f0cdedbd63ae8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
