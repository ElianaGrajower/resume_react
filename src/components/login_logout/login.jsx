import React, { useState } from 'react'
import { Button, TextField } from '@mui/material';
import ResumeBuilder from '../resumeBuilder';

export default function Login({loginForm, authState, addResume}) {

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     loginForm(e);
    // }


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
