import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
// import InputsContext from '../../context/input';

export default function Education({handleChange}) {
    // const { handleChange } = useContext(InputsContext);

    const [edu, setEdu] = useState({
        eduName: "",
        eduTimeFrame: ""
    });

    const handleChangeEdu = (e) => {
        setEdu((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        console.log(edu);
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
