import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import WorkExperience from '../work_experience';
import Education from '../education';
// import InputsContext from '../../context/input';
import FullName from '../full_name';
import DownloadPDF from '../pdf';
import UploadImage from '../image';

export default function ResumeBuilder() {
    const [inputs, setInputs] = useState({
        fullName: "",
        workExperience: [],
        education: [],
        image: ""
    });

    const handleChange = (obj, key) => {
        const innerObj = obj[key];
        console.log(innerObj);
        setInputs({
            ...inputs,
            [key]: innerObj,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FullName handleChange={handleChange} />
                <Typography>Work Experience</Typography>
                <WorkExperience handleChange={handleChange} />
                <button onClick={() => <WorkExperience handleChange={handleChange} />}>add experience</button>
                <Typography>Education</Typography>
                <Education handleChange={handleChange} />
                <UploadImage handleChange={handleChange} />
                <Button type='submit'>Submit</Button>
            </form>

            <DownloadPDF inputs={inputs} />
        </div>
    )
}
