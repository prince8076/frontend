import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchVideoStream } from '../services/api';

const VideoPlayer = () => {
    const { id } = useParams();
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const fetchVideo = async () => {
            const url = fetchVideoStream(id);
            setVideoUrl(url); // Set the correct video URL
        };
        fetchVideo();
    }, [id]);

    return (
        <div>
            <h1>Video Player</h1>
            {videoUrl ? (
                <video controls width="800">
                    <source src={videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default VideoPlayer;
