import React from 'react';

const VideoPlayer = () => {
  const videoSrc = 'https://www.youtube.com/embed/HaZdvjFe9Iw';

  return (
    <section className="relative mt-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-pink-600">Product Demo</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">1 分钟看懂插件效果</h2>
        </div>

        <div className="bg-white overflow-hidden">
          <div className="relative pt-[56.25%] rounded-xl overflow-hidden bg-gray-100">
            <iframe
              src={videoSrc}
              title="ChatGPT for WeChat demo"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPlayer;
