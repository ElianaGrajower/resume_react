import React from 'react'
import { Button } from '@mui/material'

export default function Logout({logout}) {    
    const buttonHandler = (e) => {
        logout(e);
    }

  return (
    <div>
        <Button onClick={buttonHandler}>Log Out</Button>
    </div>
  )
}
