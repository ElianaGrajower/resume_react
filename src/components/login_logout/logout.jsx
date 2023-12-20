import React, { useContext } from 'react'
import { Button } from '@mui/material'
import ResumeContext from '../../context/input';

export default function Logout() {  
    const { logout } = useContext(ResumeContext);
  
    const buttonHandler = (e) => {
        logout(e);
    }

  return (
    <div>
        <Button onClick={buttonHandler}>Log Out</Button>
    </div>
  )
}
