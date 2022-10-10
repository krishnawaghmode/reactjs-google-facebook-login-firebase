// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA4_rL9FQ9KZjJixC75qRPyNeXrCOe5gTM',
  authDomain: 'reactjs--login.firebaseapp.com',
  projectId: 'reactjs--login',
  storageBucket: 'reactjs--login.appspot.com',
  messagingSenderId: '852197895770',
  appId: '1:852197895770:web:285670223daee493b23263',
  measurementId: 'G-4N35EW23GP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
