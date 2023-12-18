import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import WorkExperience from '../work_experience';
import Education from '../education';
// import InputsContext from '../../context/input';
import FullName from '../full_name';

export default function ResumeBuilder() {
    const [inputs, setInputs] = useState({
        fullName: "",
        workExperience: [],
        education: []
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
                <FullName handleChange={handleChange}/>
                <Typography>Work Experience</Typography>
                <WorkExperience handleChange={handleChange} />
                <button onClick={() => { <WorkExperience handleChange={handleChange}/> }}>add experience</button>
                <Typography>Education</Typography>
                <Education handleChange={handleChange}/>
                {//TODO: input image!!
                }
                <img src="https://cdn.pixabay.com/photo/2014/04/03/10/32/businessman-310819_1280.png" width={50} height={50} alt="fill in" />
                <Button type='submit'>Submit</Button>
            </form>

            <Card className='pdf' text-align='left'>
                <h2>{inputs.fullName}</h2>
                <h3>Work Experience</h3>
                <h4>{inputs.workExperience.companyName}</h4>
                <h6>{inputs.workExperience.workTimeFrame}</h6>
                <h3>Education</h3>
                <h4>{inputs.education.eduName}</h4>
                <h6>{inputs.education.eduTimeFrame}</h6>

            </Card>
        </div>
    )
}
