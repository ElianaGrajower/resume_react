import React, { useContext, useState } from 'react'
import { Button, TextField } from '@mui/material';
import ResumeBuilder from '../resumeBuilder';
import ResumeContext from '../../context/input';
// import './../../pages/home.css'
import Register from './register';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const { loginForm } = useContext(ResumeContext);

    const navigate = useNavigate()

    const loggingIn = (e) =>{
        navigate("/firebase/index.js");
        loginForm(e);
    }
    

    return (
        <div className="formContainer">
            <form className="form" onSubmit={loggingIn}>
                <TextField
                    className="textField"
                    name='email'
                    type='email'
                    placeholder='email'
                    variant='outlined'
                />
                <TextField
                    className="textField"
                    name='password'
                    type='password'
                    placeholder='password'
                    variant='outlined'
                />
                <Button className="submit" type='submit'>Login</Button>
            </form>
            {/* <Button onClick={() => navigate("/register")}>sign up</Button> */}
            <Link className="link" to="/register">Sign Up</Link>
        </div>
    )
}
