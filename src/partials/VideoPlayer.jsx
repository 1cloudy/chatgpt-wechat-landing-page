import React from 'react';

const VideoPlayer = () => {
  const videoSrc = "https://www.youtube.com/embed/HaZdvjFe9Iw";

  return (
    <div className='max-w-6xl mx-auto mt-13.5 md:mt-21 mb-8 relative rounded-lg overflow-hidden'>
      <iframe src={videoSrc} width="100%" height="600" frameBorder="0" allowFullScreen></iframe>
    </div>
  );
};

export default VideoPlayer;
