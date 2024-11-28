import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadVideo } from '../services/api';

const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setVideo(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!video) {
            setMessage('Please select a video to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('video', video);

        try {
            await uploadVideo(formData);
            setMessage('Video uploaded successfully!');
            navigate('/videos');
        } catch (error) {
            console.error(error);
            setMessage('Failed to upload video.');
        }
    };

    return (
        <div>
            <h1>Upload Video</h1>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default VideoUpload;
