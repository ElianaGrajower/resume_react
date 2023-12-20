import { Button, FormControl, FormHelperText, Input, InputLabel, TextField } from '@mui/material'
import React, { useContext } from 'react'
import ResumeContext from '../../context/input'
// import './../../pages/home.css'
import { Link, useNavigate } from 'react-router-dom'


export default function Register() {
    const { signUpForm } = useContext(ResumeContext)

    const navigate = useNavigate()

    const signingIn = (e) =>{
        navigate("/firebase/index.js");
        signUpForm(e);
    }


    return (
        <div className="formContainer">
            <form className="form" onSubmit={signingIn}>
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
                <Button className="submit" type='submit'>Sign Up</Button>
            </form>
            <Link className="link" to={"/login"}>Login</Link>
        </div>
    )
}
