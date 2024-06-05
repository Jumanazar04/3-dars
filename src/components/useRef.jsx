import React, { useRef } from 'react';

import audio from '../assets/audio.mp3'
import video from '../assets/video.mp4'


const UseRef = () => {
    const audioRef = useRef(null);
    const videoRef = useRef(null);

    const playAudio = () => {
        audioRef.current.play();
    };

    const stopAudio = () => {
        audioRef.current.pause();
    };

    const playVideo = () => {
        videoRef.current.play();
    };

    const stopVideo = () => {
        videoRef.current.pause();
    };

    return (
        <div className='container mx-auto text-center flex flex-col gap-3 mb-14'>
            <h1>Audio Player</h1>
            <audio className='mx-auto' src={audio} ref={audioRef} controls />
            <div>    
                <button className='border rounded py-1 px-3 mr-1' onClick={playAudio}>Play</button>
                <button className='border rounded py-1 px-3 mr-1' onClick={stopAudio}>Stop</button>
            </div>

            <h1>Video Player</h1>
            <video ref={videoRef} src={video} controls className='mx-auto'>
            </video>
            <div>    
                <button className='border rounded py-1 px-3 mr-1' onClick={playVideo}>Play </button>
                <button className='border rounded py-1 px-3 mr-1' onClick={stopVideo}>Stop </button>
            </div>
        </div>
    );
};

export default UseRef;
