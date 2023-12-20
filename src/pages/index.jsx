import React, { useContext, useEffect, useState } from 'react'
import ResumeBuilder from '../components/resumeBuilder'
import ResumeInput from './resumeInput';
import Login from '../components/login_logout/login';
import Register from '../components/login_logout/register';
import ResumeContext from '../context/input';
// import './home.css'; 


export default function Home() {
    const { loggedIn } = useContext(ResumeContext)


    return (
        <div className="container">
            {!loggedIn && <Login />}
            {loggedIn && <ResumeInput />}
        </div>
    )
}
