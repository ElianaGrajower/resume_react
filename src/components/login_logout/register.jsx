import { Button, TextField } from '@mui/material'
import React from 'react'

export default function Register({ signUpForm }) {
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     signUpForm(e);
    // }

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
