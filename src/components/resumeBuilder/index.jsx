import { Button, Card, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import WorkExperience from '../work_experience';
import Education from '../education';
import FullName from '../full_name';
import DownloadPDF from '../pdf';
import UploadImage from '../image';
import ResumeContext from '../../context/input';
import './resumeBuilder.css'


export default function ResumeBuilder({ userId }) {
    const { addResume } = useContext(ResumeContext)

    const [inputs, setInputs] = useState({
        fullName: "",
        workExperience: [],
        education: [],
        image: "",
        userID: userId
    });

    const [experience, setExperience] = useState([])

    const [reseting, setReseting] = useState(true)

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
        setExperience([...experience, (inputs.workExperience)])
    };

    const resetForm = () => {
        setInputs({
            fullName: "",
            workExperience: [],
            education: [],
            image: "",
            userID: userId
        });
        setExperience([]);
        console.log("cleared?????");
        setReseting(!reseting);
    }

    //TODO fix the work info!!!

    return (
        <div className="resumeBuilderContainer">
            <div className="formContainer">
                <form className='resForm' onSubmit={handleSubmit}>
                    <FullName handleChange={handleChange} reseting={reseting} />
                    <Typography>Work Experience</Typography>
                    {/*<button onClick={() => <WorkExperience handleChange={handleChange} />}>add experience</button> */}
                    <WorkExperience handleChange={handleChange} reseting={reseting}/>
                    {(experience)?.map((exp, index) => {
                        console.log(exp);
                        return <WorkExperience
                            key={index}
                            handleChange={handleChange}
                            reseting={reseting}
                        />
                    })}
                    <button onClick={handleAddExperience}>add experience</button>

                    <Typography>Education</Typography>
                    <Education handleChange={handleChange} reseting={reseting} />
                    <UploadImage handleChange={handleChange} reseting={reseting} />
                    <Button type='submit'>Submit</Button>
                </form>
            </div>
            <div className="downloadPdfContainer">
                <div className='innerDisplayPdf'>
                    <DownloadPDF inputs={inputs} />
                </div>
                <Button onClick={resetForm}>New Resume</Button>
            </div>
        </div>
    )
}
