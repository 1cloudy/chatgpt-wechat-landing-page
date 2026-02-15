import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setTop(window.pageYOffset <= 10);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${!top ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex-shrink-0 mr-4">
            <Link to="/" className="inline-flex items-center gap-2" aria-label="ChatGPT for WeChat">
              <svg className="w-8 h-8" width="192" height="192" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="192" height="192" rx="40" fill="#d946ef" />
                <g clipPath="url(#clip0_2_14)">
                  <path d="M96 96C98.7154 96 100.917 93.7987 100.917 91.0833C100.917 88.3679 98.7154 86.1667 96 86.1667C93.2846 86.1667 91.0833 88.3679 91.0833 91.0833C91.0833 93.7987 93.2846 96 96 96Z" fill="white" />
                  <path d="M115.667 96C118.382 96 120.583 93.7987 120.583 91.0833C120.583 88.3679 118.382 86.1667 115.667 86.1667C112.951 86.1667 110.75 88.3679 110.75 91.0833C110.75 93.7987 112.951 96 115.667 96Z" fill="white" />
                  <path d="M76.3334 96C79.0488 96 81.25 93.7987 81.25 91.0833C81.25 88.3679 79.0488 86.1667 76.3334 86.1667C73.618 86.1667 71.4167 88.3679 71.4167 91.0833C71.4167 93.7987 73.618 96 76.3334 96Z" fill="white" />
                  <path d="M130.417 51.75H61.5833C57.6714 51.75 53.9197 53.304 51.1535 56.0702C48.3873 58.8363 46.8333 62.5881 46.8333 66.5V140.25C46.8348 141.121 47.0678 141.976 47.5084 142.728C47.949 143.48 48.5814 144.101 49.3408 144.528C50.0756 144.944 50.9054 145.164 51.75 145.167C52.6324 145.166 53.4986 144.929 54.2575 144.478L76.3333 131.105C77.1493 130.619 78.0885 130.38 79.0375 130.417H130.417C134.329 130.417 138.08 128.863 140.846 126.096C143.613 123.33 145.167 119.579 145.167 115.667V66.5C145.167 62.5881 143.613 58.8363 140.846 56.0702C138.08 53.304 134.329 51.75 130.417 51.75ZM135.333 115.667C135.333 116.971 134.815 118.221 133.893 119.143C132.971 120.065 131.721 120.583 130.417 120.583H79.0375C76.3521 120.581 73.7171 121.312 71.4166 122.698L56.6666 131.547V66.5C56.6666 65.196 57.1847 63.9454 58.1067 63.0234C59.0288 62.1013 60.2793 61.5833 61.5833 61.5833H130.417C131.721 61.5833 132.971 62.1013 133.893 63.0234C134.815 63.9454 135.333 65.196 135.333 66.5V115.667Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_2_14">
                    <rect width="118" height="118" fill="white" transform="translate(37 37)" />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-semibold text-gray-900 hidden sm:inline">ChatGPT for WeChat</span>
            </Link>
          </div>

          <nav className="flex flex-grow justify-end">
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2 text-sm sm:text-base">
              <li>
                <a
                  href="https://docs.aow.me/docs/social_auto_post"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-700 hover:text-pink-600 px-2 sm:px-3 py-2 rounded-lg hover:bg-pink-50 transition"
                >
                  SocialAutoPost
                </a>
              </li>
              <li>
                <a
                  href="https://chatgpt4filehelper.aow.me/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-700 hover:text-pink-600 px-2 sm:px-3 py-2 rounded-lg hover:bg-pink-50 transition"
                >
                  个人助手版
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  href="https://aoq.me"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-gray-700 hover:text-pink-600 px-2 sm:px-3 py-2 rounded-lg hover:bg-pink-50 transition"
                >
                  WhatsApp 版本
                </a>
              </li>
              <li>
                <a
                  href="https://docs.aow.me"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-white bg-pink-600 hover:bg-pink-700 px-3 sm:px-4 py-2 rounded-lg transition"
                >
                  使用指南
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
