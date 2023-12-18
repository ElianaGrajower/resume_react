import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function FullName({handleChange}) {
    const [fullName, setFullName] = useState('');

    const handleChangeName = (e) => {
        setFullName(e.target.value);
    };

    useEffect(() => {
        console.log(fullName);
        handleChange({ fullName: fullName }, 'fullName');
    }, [fullName])
    

    return (
        <div>
            <TextField
                name='fullName'
                value={fullName}
                onChange={handleChangeName}
                type='text'
                placeholder='full name'
                variant='outlined'
            />
        </div>
    )
}
