// 👇️ import the pdf document
import html2pdf from 'html2pdf.js'
import React, { useRef } from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, TextField, Typography, } from '@mui/material'
import { blue, grey } from '@mui/material/colors';
import makeStyles from '@emotion/styled';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 400,
        margin: 'auto',
        marginTop: theme.spacing(3),
        backgroundColor: '#f0f0f0',
    },
    content: {
        padding: theme.spacing(2),
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
}));

function DownloadPDF({ inputs }) {
    const classes = useStyles();

    const resumeRef = useRef();

    const handleDownload = () => {
        const resumeElement = resumeRef.current;
        if (resumeElement) {
            const pdfOptions = {
                margin: 10,
                fileName: 'resume.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            html2pdf().from(resumeElement).set(pdfOptions).save();
        };
    };

    return (
        <div>
            <div ref={resumeRef}>
                <Card className={classes.card} variant="outlined">
                    {/* <CardHeader title={inputs.fullName} sx={{ bgcolor: blue[600], color: grey[50]} }/> */}
                    {/* <h2>{inputs.fullName}</h2> */}
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>
                                {/* Add your image here */}
                                <img
                                    src={inputs.image}
                                    alt={inputs.fullName}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Avatar>
                        }
                        title={inputs.fullName}
                        subheader="add something"
                    />
                    <CardContent className={classes.content}>
                        <Typography variant="h6" gutterBottom>
                            Experience
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {inputs.workExperience.companyName} ({inputs.workExperience.workTimeFrame})
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Education
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {inputs.education.eduName} ({inputs.education.eduTimeFrame})
                        </Typography>
                    </CardContent>
                    {/* {console.log("image in pdf", inputs.image, inputs.fullName)}
                    {(inputs.image) ? <img src={inputs.image} alt="profile pic" width={100} height={100} /> : <></>}
                    <h3>Work Experience</h3>
                    <h4>{inputs.workExperience.companyName}</h4>
                    <h6>{inputs.workExperience.workTimeFrame}</h6>
                    <h3>Education</h3>
                    <h4>{inputs.education.eduName}</h4>
                    <h6>{inputs.education.eduTimeFrame}</h6> */}
                </Card>
            </div>
            <br />
            <button onClick={handleDownload}>Download PDF</button>
        </div>
    );
}

export default DownloadPDF;




