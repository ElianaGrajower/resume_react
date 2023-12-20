import React, { useEffect, useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../context/input.jsx';
import { v4 } from 'uuid';

export default function UploadImage({handleChange, reseting}) {
    const [image, setImage] = useState('');

    useEffect(() => {
        setImage('')
      }, [reseting])

    function handleChangeImage(e) {
        e.preventDefault();
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        handleChange({ ['image']: image }, 'image');
    }, [image])

    // const uploadImage = async (e) => {
    //     e.preventDefault();
    //     setImage(URL.createObjectURL(e.target.files[0]));

    //     try {
    //       if (image === null) return;
    
    //       const imageRef = ref(storage, `images/${image.name + v4()}`);
    //       await uploadBytes(imageRef, image);
    
         
    //       const imageUrl = await getDownloadURL(imageRef);
    //       setImage(imageUrl)
          
    //       alert(`Image uploaded successfully! URL: ${imageUrl}`);
    //       console.log(`Image uploaded successfully! URL: ${imageUrl}`);
    //     } catch (error) {
    //       console.error('Error uploading image:', error);
    //     }
    //   };

    return (
        <div>
            <p>Upload Image:</p>
            <input type="file" onChange={handleChangeImage} />
        </div>
    )
}

//?????

// import { useState } from 'react';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from './firebase/index.js'; // ייתכן שתצטרך להתאים את הנתיב לקובץ firebase.js שלך
// import { v4 } from 'uuid';

// const UpImage = () => {
//   const [imageUpload, setImageUpload] = useState(null);

//   const uploadImage = async () => {
//     try {
//       if (imageUpload === null) return;

//       const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//       await uploadBytes(imageRef, imageUpload);

     
//       const imageUrl = await getDownloadURL(imageRef);
      
      
//       alert(`Image uploaded successfully! URL: ${imageUrl}`);
//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   };

//   const handleImageChange = (e) => {
//     const selectedImage = e.target.files[0];
//     setImageUpload(selectedImage);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageChange} />
//       <button onClick={uploadImage}>Upload Image</button>
//     </div>
//   );
// };

// export default UpImage;

