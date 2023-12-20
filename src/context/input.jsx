import { createContext, useState } from "react";

import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, getDocs, addDoc, onSnapshot, query, where
} from 'firebase/firestore'
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    signInWithEmailAndPassword, onAuthStateChanged
} from 'firebase/auth'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { getStorage } from "firebase/storage";

const ResumeContext = createContext()

//TODO: move to .env!!!!
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

const Provider = ({ children }) => {


    const colRefUser = collection(db, 'users')
    const colRefRes = collection(db, 'resumes')

    const auth = getAuth()


    const onSnapshotUser = onSnapshot(colRefUser, (snapshot) => {
        let users = []
        snapshot.docs.forEach((doc) => {
            users.push({ ...doc.data(), id: doc.id })
        })
        console.log(users);
    })


    const onSnapshotRes = onSnapshot(colRefRes, (snapshot) => {
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
            image: data['image'],
            userID: data['userID']
        })
    }

    const addUser = (data) => {
        console.log(data);
        addDoc(colRefUser, {
            email: data.email,
            uid: data.uid,
            role: 'user'
        })
    }


    const signUpForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                const user = cred.user;
                console.log(cred);
                console.log(user);
                addUser(user);
                // console.log('user created:', cred.user);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const loginForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                // console.log('user logged in:', cred.user);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                // console.log('The user signed out');
            })
            .catch((err) => {
                console.log(err.message);
            })
    }


    const [loggedIn, setLoggedIn] = useState(false);

    onAuthStateChanged(auth, (user) => {
        console.log('user status changed:', user);
        if (user) {
            setLoggedIn(true);
        }
        else setLoggedIn(false);
    });


    const shared = { addResume, signUpForm, loginForm, logout, loggedIn, colRefRes, auth, colRefUser }

    return (
        <ResumeContext.Provider value={shared}>
            {children}
        </ResumeContext.Provider>
    )
}

export { Provider }
export default ResumeContext
export const storage = getStorage();
