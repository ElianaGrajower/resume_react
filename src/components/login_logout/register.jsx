import { Button, TextField } from '@mui/material'
import React from 'react'
import {
    getAuth, createUserWithEmailAndPassword
} from 'firebase/auth'

export default function Register({auth}) {
    const signUpForm = (e) => {
        e.preventDefault();
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

    return (
        <div>
            <form onSubmit={signUpForm}>
                <TextField
                    name='email'
                    type='email'
                    placeholder='email'
                    variant='outlined'
                />
                <TextField
                    name='password'
                    type='password'
                    placeholder='password'
                    variant='outlined'
                />
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
