import React, { useContext, useEffect, useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
// import InputsContext from '../../context/input';


export default function WorkExperience({handleChange, reseting}) {
    // const { handleChange } = useContext(InputsContext);

    const [workExp, setWorkExp] = useState({
        companyName: '',
        workTimeFrame: ''
    });

    useEffect(() => {
        setWorkExp({
            companyName: '',
            workTimeFrame: ''
        })
      }, [reseting])

    const handleChangeWorkExp = (e) => {
        setWorkExp((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    useEffect(() => {
        handleChange({ ['workExperience']: workExp }, 'workExperience');
    }, [workExp])

    return (
        <div>
            <TextField
                name='companyName'
                value={workExp.companyName}
                onChange={handleChangeWorkExp}
                type='text'
                placeholder='company name'
                variant='outlined'
            />
            <TextField
                name='workTimeFrame'
                value={workExp.workTimeFrame}
                onChange={handleChangeWorkExp}
                type='text'
                placeholder='time frame'
                variant='outlined'
            />
        </div>
    )
}
