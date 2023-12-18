// 👇️ import the pdf document
import html2pdf from 'html2pdf.js'
import React, { useRef } from 'react';
import { Button, Card, TextField, Typography } from '@mui/material'

function DownloadPDF({inputs}) {
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
                <button onClick={handleDownload}>Download PDF</button>
        </div>
    );
}

export default DownloadPDF;




