import React, { useEffect, useState } from 'react'

export default function UploadImage({handleChange, reseting}) {
    const [image, setImage] = useState('');

    useEffect(() => {
        setImage('')
      }, [reseting])

    function handleChangeImage(e) {
        console.log(e.target.files);
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    useEffect(() => {
        handleChange({ ['image']: image }, 'image');
    }, [image])

    return (
        <div>
            <p>Upload Image:</p>
            <input type="file" onChange={handleChangeImage} />
        </div>
    )
}
