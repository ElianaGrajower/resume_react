import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import WorkExperience from '../work_experience';
import Education from '../education';
// import InputsContext from '../../context/input';
import FullName from '../full_name';
import DownloadPDF from '../pdf';
import UploadImage from '../image';
import Logout from '../login_logout/logout';

//? !!!!!!!!!!!!!!!!!!!!!!!!!!!


// import { initializeApp } from 'firebase/app'
// import {
//     getFirestore, collection, getDocs, addDoc, onSnapshot
// } from 'firebase/firestore'
// import {
//     getAuth
// } from 'firebase/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyCCF3mFhBT_s62ScwDFK8oMITY3stWO3aI",
//     authDomain: "project5-resume.firebaseapp.com",
//     projectId: "project5-resume",
//     storageBucket: "project5-resume.appspot.com",
//     messagingSenderId: "28982484416",
//     appId: "1:28982484416:web:4fcc4b200e67a7c3cb3c25"
// };

// initializeApp(firebaseConfig)

// const db = getFirestore()
// const auth = getAuth()

// const colRef = collection(db, 'users')

// getDocs(colRef)
//     .then((snapshot) => {
//         let users = []
//         snapshot.docs.forEach((doc) => {
//             users.push({ ...doc.data(), id: doc.id })
//         })
//         console.log(users);
//     })
//     .catch(err => {
//         console.log(err.message);
//     });

// const colRefRes = collection(db, 'resumes')

// onSnapshot(colRefRes, (snapshot) => {
//     let resumes = []
//     snapshot.docs.forEach((doc) => {
//         resumes.push({ ...doc.data(), id: doc.id })
//     })
//     console.log(resumes);
// })

// const addResume = (data) => {
//     console.log(data);
//     addDoc(colRefRes, {
//         fullName: data['fullName'],
//         workExperience: data['workExperience'],
//         education: data['education'],
//         image: data['image']
//     })
// }



//? !!!!!!!!!!!!!!!!!!!!!!!!!!!!  


export default function ResumeBuilder({addResume}) {
    const [inputs, setInputs] = useState({
        fullName: "",
        workExperience: [],
        education: [],
        image: ""
    });

    const handleChange = (obj, key) => {
        const innerObj = obj[key];
        console.log(innerObj);
        setInputs({
            ...inputs,
            [key]: innerObj,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        addResume(inputs);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FullName handleChange={handleChange} />
                <Typography>Work Experience</Typography>
                <WorkExperience handleChange={handleChange} />
                <button onClick={() => <WorkExperience handleChange={handleChange} />}>add experience</button>
                <Typography>Education</Typography>
                <Education handleChange={handleChange} />
                <UploadImage handleChange={handleChange} />
                <Button type='submit'>Submit</Button>
            </form>

            <DownloadPDF inputs={inputs} />
        </div>
    )
}
