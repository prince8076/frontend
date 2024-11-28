import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../services/api';
import { Link } from 'react-router-dom';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            try {
                const data = await fetchVideos();
                setVideos(data);
            } catch (error) {
                console.error('Error fetching videos:', error);
            }
        };

        getVideos();
    }, []);

    return (
        <div>
            <h1>Uploaded Videos</h1>
            {videos.length === 0 ? (
                <p>No videos found.</p>
            ) : (
                <ul>
                    {videos.map((video) => (
                        <li key={video._id}>
                            <Link to={`/video/${video._id}`}>{video.title || 'Untitled Video'}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default VideoList;
