import React from 'react'
import {
    getAuth, signOut
} from 'firebase/auth'
import { Button } from '@mui/material'

export default function Logout({auth}) {    
    const logout = () =>{
        signOut(auth)
        .then(()=>{
            console.log('The user signed out');
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

  return (
    <div>
        <Button onClick={logout}>Log Out</Button>
    </div>
  )
}
