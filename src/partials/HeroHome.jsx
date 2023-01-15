import React from 'react';

import ChromeIcon from '../images/chrome.svg';

function HeroHome() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-6 md:pt-40 md:pb-10">

          {/* Section header */}
          <div className="text-center pb-6 md:pb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">ChatGPT for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Wechat</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">一个 Chrome 浏览器插件，通过 ChatGPT 来自动响应微信私信或群聊中 <span className="bg-clip-text text-primary">@你</span> 的消息的智能聊天机器人</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-500 transition duration-300 ease-in-out hover:bg-blue-600 w-full mb-4 sm:w-auto sm:mb-0" target="_blank" href="https://chrome.google.com/webstore/detail/chatgpt-for-wechat/cdlangplaophialnpfbdfndiobanklfd">
                    <img src={ChromeIcon} width="20" height="20" alt="Add to Chrome" />
                    <span className="ml-2 -mr-1">安装到 chrome</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;