import React, { useContext, useEffect, useState } from 'react'
import Logout from '../components/login_logout/logout'
import ResumeBuilder from '../components/resumeBuilder'
import DownloadPDF from '../components/pdf'
import { getDocs, query, where } from 'firebase/firestore';
import ResumeContext from '../context/input';
import './home.css';


export default function ResumeInput() {
    const { auth, colRefRes, colRefUser } = useContext(ResumeContext)
    const userId = auth.currentUser.uid;

    const [resumeDocs, setResumeDocs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let querySnapshot;
                let role;
                const qUser = query(colRefUser, where('uid', '==', userId));
                const querySnapshotUser = await getDocs(qUser);
                try{
                    role = querySnapshotUser.docs[0].data().role;
                } catch (error) {
                    role = 'user';
                }
                if (role == 'admin') {
                    querySnapshot = await getDocs(colRefRes);
                    console.log("admin resumes", querySnapshot);
                }
                else {
                    const q = query(colRefRes, where('userID', '==', userId));
                    querySnapshot = await getDocs(q);
                    console.log("user resumes", querySnapshot);

                }

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
            <ResumeBuilder userId={userId} />
            <Logout />
            <h2>Resumes:</h2>
            <div className='allResumes'>
                {resumeDocs?.map((doc, index) => {
                    console.log("this is doc:", doc);
                    return <div className='eachResume' key={index}>
                        <DownloadPDF inputs={doc} />
                    </div>
                })}
            </div>
        </div>
    )
}
