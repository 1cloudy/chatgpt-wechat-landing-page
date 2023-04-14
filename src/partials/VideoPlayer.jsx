import React from "react";

const VideoPlayer = () => {
  const videoSrc = "https://www.youtube.com/embed/HaZdvjFe9Iw";

  return (
    <section className="relative mt-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 rounded-lg overflow-hidden">
        <iframe
          src={videoSrc}
          width="100%"
          height="600"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoPlayer;
