import React from 'react';
import ChromeIcon from '../images/chrome.svg';
function HeroHome() {
  return (
    <section className="relative mt-16 pt-16 md:pt-24">
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[880px] h-[320px] bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
            <p className="inline-flex px-3 py-1 rounded-full text-xs tracking-[0.2em] uppercase font-semibold text-pink-700 bg-pink-100 border border-pink-200">
              WeChat AI Agent
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
              ChatGPT for <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">WeChat</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
              在微信群、私聊和文件传输助手中智能回复 <span className="font-semibold text-pink-600">@消息</span>。
              无需自建服务器，安装插件即可快速部署你的微信 AI 助手。
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-700 text-white font-semibold transition"
                target="_blank"
                rel="noreferrer"
                href="https://chrome.google.com/webstore/detail/chatgpt-for-wechat/cdlangplaophialnpfbdfndiobanklfd?utm_source=landing&utm_medium=hero&utm_campaign=install"
              >
                <img src={ChromeIcon} width="20" height="20" alt="Add to Chrome" />
                <span className="ml-2">安装到 Chrome</span>
              </a>

              <a
                href="https://aow.me/chatgpt4wechat_v2?utm_source=landing&utm_medium=hero&utm_campaign=offline_download"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-pink-200 bg-white text-gray-900 hover:bg-pink-50 font-semibold transition"
              >
                下载离线安装包
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-sm text-gray-600 justify-center">
              <span className="px-3 py-1 rounded-full bg-white border border-gray-200">支持群聊和私聊</span>
              <span className="px-3 py-1 rounded-full bg-white border border-gray-200">无需服务器</span>
              <span className="px-3 py-1 rounded-full bg-white border border-gray-200">多 AI 源配置</span>
            </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
