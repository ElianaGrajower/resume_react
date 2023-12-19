import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import WorkExperience from '../work_experience';
import Education from '../education';
// import InputsContext from '../../context/input';
import FullName from '../full_name';
import DownloadPDF from '../pdf';
import UploadImage from '../image';


export default function ResumeBuilder({ addResume }) {
    const [inputs, setInputs] = useState({
        fullName: "",
        workExperience: [{}],
        education: [],
        image: ""
    });

    const [experience, setExperience] = useState([])

    useEffect(() => {
        // console.log(inputs.workExperience);
        console.log(inputs);
        console.log(inputs.workExperience);
        setExperience(inputs.workExperience)
      }, [])
// const [experience, setExperience] = useState(['',])

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
    addResume(inputs);
}

const handleAddExperience = () => {
    // Clone the existing array and add a new empty experience object
    const newWorkExperience = [...experience, {}];
    setInputs({
        ...inputs,
        workExperience: newWorkExperience,
    });
    console.log(inputs.workExperience);
    setExperience([...experience, (inputs.workExperience)])
};

//TODO fix the work info!!!

return (
    <div>
        <form onSubmit={handleSubmit}>
            <FullName handleChange={handleChange} />
            <Typography>Work Experience</Typography>
            {/* <WorkExperience handleChange={handleChange} /> */}
            {/*<button onClick={() => <WorkExperience handleChange={handleChange} />}>add experience</button> */}
            <button onClick={handleAddExperience}>add experience</button>
            {(experience)?.map((exp, index) => {
                console.log(exp);
                return <WorkExperience
                    key={index}
                    handleChange={handleChange}
                />
            })}

            <Typography>Education</Typography>
            <Education handleChange={handleChange} />
            <UploadImage handleChange={handleChange} />
            <Button type='submit'>Submit</Button>
        </form>

        <DownloadPDF inputs={inputs} />
    </div>
)
}
