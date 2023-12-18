import React from 'react'
import {
    getAuth, signInWithEmailAndPassword
} from 'firebase/auth'
import { Button, TextField } from '@mui/material';

export default function Login({auth}) {
    const loginForm = (e) => {
        e.preventDefault();
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
  return (
    <div>
        <form onSubmit={loginForm}>
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
                <Button type='submit'>Login</Button>
            </form>
    </div>
  )
}
