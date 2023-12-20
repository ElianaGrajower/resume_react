import React, { useEffect, useState } from 'react'
import Logout from '../components/login_logout/logout'
import ResumeBuilder from '../components/resumeBuilder'
import DownloadPDF from '../components/pdf'
import { getDocs, query, where } from 'firebase/firestore';

export default function ResumeInput({ logout, addResume, userId, colRefRes }) {
    const [resumeDocs, setResumeDocs] = useState([]);

    // console.log(colRefRes);
    // const q = query(colRefRes, where("userID", "==", 'smu1SiVAywMCBjK7BYhN2u8nfps1'));
    // const querySnapshot = getDocs(q);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(colRefRes, where('userID', '==', userId));
                const querySnapshot = await getDocs(q);

                const documents = querySnapshot.docs.map((doc) => doc.data());
                setResumeDocs(documents);
            } catch (error) {
                console.error('Error fetching documents:', error);
            }
        };
        fetchData();
    }, [userId, colRefRes]);

    return (
        <div>
            <Logout logout={logout} />
            {resumeDocs?.map((doc, index) => {
                console.log("this is doc:", doc);
                return <DownloadPDF key={index} inputs={doc} />
            })}
            <ResumeBuilder addResume={addResume} userId={userId} />
        </div>
    )
}
