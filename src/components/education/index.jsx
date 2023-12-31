import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'


export default function Education({handleChange, reseting}) {
    
    const [edu, setEdu] = useState({
        eduName: "",
        eduTimeFrame: ""
    });

    useEffect(() => {
        setEdu({
            eduName: "",
            eduTimeFrame: ""
        })
      }, [reseting])

    const handleChangeEdu = (e) => {
        setEdu((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        handleChange({ ['education']: edu }, 'education');
    }, [edu])

    return (
        <div>
            <TextField
                name='eduName'
                value={edu.eduName}
                onChange={handleChangeEdu}
                type='text'
                placeholder='education place'
                variant='outlined'
            />
            <TextField
                name='eduTimeFrame'
                value={edu.eduTimeFrame}
                onChange={handleChangeEdu}
                type='text'
                placeholder='time frame'
                variant='outlined'
            />
        </div>
    )
}
