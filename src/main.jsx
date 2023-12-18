import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//?


// import { initializeApp } from 'firebase/app'
// import {
//   getFirestore, collection, getDocs, addDoc
// } from 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: "AIzaSyCCF3mFhBT_s62ScwDFK8oMITY3stWO3aI",
//   authDomain: "project5-resume.firebaseapp.com",
//   projectId: "project5-resume",
//   storageBucket: "project5-resume.appspot.com",
//   messagingSenderId: "28982484416",
//   appId: "1:28982484416:web:4fcc4b200e67a7c3cb3c25"
// };

// initializeApp(firebaseConfig)

// const db = getFirestore()

// const colRef = collection(db, 'users')

// getDocs(colRef)
//   .then((snapshot) => {
//     let users = []
//     snapshot.docs.forEach((doc) => {
//       users.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(users);
//   })
//   .catch(err => {
//     console.log(err.message);
//   })




//?

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />

)
