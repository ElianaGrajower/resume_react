import React from 'react'
import ResumeBuilder from '../components/resumeBuilder'

//? !!!!!


import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, addDoc, onSnapshot
} from 'firebase/firestore'
import {
    getAuth, createUserWithEmailAndPassword
} from 'firebase/auth'
import Register from '../components/login_logout/register'
import Login from '../components/login_logout/login'
import Logout from '../components/login_logout/logout'

const firebaseConfig = {
    apiKey: "AIzaSyCCF3mFhBT_s62ScwDFK8oMITY3stWO3aI",
    authDomain: "project5-resume.firebaseapp.com",
    projectId: "project5-resume",
    storageBucket: "project5-resume.appspot.com",
    messagingSenderId: "28982484416",
    appId: "1:28982484416:web:4fcc4b200e67a7c3cb3c25"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const colRef = collection(db, 'users')

getDocs(colRef)
    .then((snapshot) => {
        let users = []
        snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })
        })
        console.log(users);
    })
    .catch(err => {
        console.log(err.message);
    });

const colRefRes = collection(db, 'resumes')

onSnapshot(colRefRes, (snapshot) => {
    let resumes = []
    snapshot.docs.forEach((doc) => {
        resumes.push({ ...doc.data(), id: doc.id })
    })
    console.log(resumes);
})

const addResume = (data) => {
    console.log(data);
    addDoc(colRefRes, {
        fullName: data['fullName'],
        workExperience: data['workExperience'],
        education: data['education'],
        image: data['image']
    })
}

const auth = getAuth()

const signUpForm = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user created:', cred.user);
        })
        .catch((err) => {
            console.log(err.message);
        })
}

const loginForm = (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
            console.log('user logged in:', cred.user);
        })
        .catch((err) => {
            console.log(err.message);
        })
}

const logout = () =>{
    signOut(auth)
    .then(()=>{
        console.log('The user signed out');
    })
    .catch((err)=>{
        console.log(err.message);
    })
}


//? !!!!!

export default function Home() {
    return (
        <div>
            <Register signUpForm={signUpForm}/>
            <Login loginForm={loginForm}/>
            <Logout logout={logout}/>
            <ResumeBuilder addResume={addResume} />
        </div>
    )
}
