import React from 'react'
import { Button, TextField } from '@mui/material';

export default function Login({loginForm}) {
    const submitHandler = (e) => {
        e.preventDefault();
        loginForm(e);
    }


  return (
    <div>
        <form onSubmit={submitHandler}>
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
