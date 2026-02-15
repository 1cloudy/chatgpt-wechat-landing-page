import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0 gap-3">
            <li>
              <a
                href="https://x.com/ottimogo"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center text-gray-600 hover:text-pink-600 bg-white rounded-full border border-gray-200 w-10 h-10 transition"
                aria-label="X"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.7L5.23 22H2l7.6-8.69L1.5 2h6.63l4.63 6.13L18.244 2zm-1.14 18h1.8L7.15 3.9H5.2L17.104 20z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/maooson/chatgpt-filehelper-extension"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center text-gray-600 hover:text-pink-600 bg-white rounded-full border border-gray-200 w-10 h-10 transition"
                aria-label="Github"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 16 16" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

          <div className="text-sm text-gray-600 mr-4">
            Made by{' '}
            <a className="text-pink-600 hover:underline" href="https://aow.me/" target="_blank" rel="noreferrer">
              aow.me
            </a>
            . All rights reserved.{' '}
            <a className="text-pink-600 hover:underline" href="https://aow.me/disclaimer" target="_blank" rel="noreferrer">
              免责声明
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
