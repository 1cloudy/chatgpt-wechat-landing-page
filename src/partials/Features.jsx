import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg1 from '../images/aisource.png';
import FeaturesBg2 from '../images/botset.png';
import FeaturesBg3 from '../images/features-wechat_message.jpg';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16 pt-8" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="h2 mt-12 mb-4 tracking-wider">如何使用</h1>
        </div>

        {/* Section content */}
        <div className="md:grid md:grid-cols-12 md:gap-6">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5" data-aos="fade-right">
            {/* Tabs buttons */}
            <div className="mb-8 md:mb-0">
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(1); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">1. 安装插件，配置AI源</div>
                  <div className="text-gray-600">已支持AI源：ChatGPT、Google Bard、Bing Chat；使用AI源，需要打开AI源的网站并保持登录状态</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">2. 设置 bot 参数</div>
                  <div className="text-gray-600">根据需要设置参数，bot默认开启状态。设置完成后点击插件小图标，查看连接状态。</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">3. 触发 ChatGPT 应答微信消息</div>
                  <div className="text-gray-600">微信群聊/私聊，需<a className="text-blue-500" href="https://wx.qq.com/?target=t" target="_blank">登录微信网页版，</a>使用方法：在手机微信群中<span className="text-blue-500">@登录微信昵称 问题</span>；仅自己使用，登录<a className="text-blue-500" href="https://filehelper.weixin.qq.com/" target="_blank">文件传输助手</a>，命令： <span className="text-blue-500">@gpt</span></div>
                </div>
              </a>
            </div>
          </div>

          {/* Tabs items */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-7 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
            <div className="relative flex flex-col text-center lg:text-right">
              {/* Item 1 */}
              <Transition
                show={tab === 1}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg1} width="100%" height="100%" alt="Login wechat web page" />
                </div>
              </Transition>
              {/* Item 2 */}
              <Transition
                show={tab === 2}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg2} width="100%" height="100%" alt="Login chatgpt page" />
                </div>
              </Transition>
              {/* Item 3 */}
              <Transition
                show={tab === 3}
                appear={true}
                className="w-full"
                enter="transition ease-in-out duration-700 transform order-first"
                enterStart="opacity-0 translate-y-16"
                enterEnd="opacity-100 translate-y-0"
                leave="transition ease-in-out duration-300 transform absolute"
                leaveStart="opacity-100 translate-y-0"
                leaveEnd="opacity-0 -translate-y-16"
              >
                <div className="w-full relative inline-flex flex-col">
                  <img className="md:max-w-none mx-auto rounded" src={FeaturesBg3} width="100%" height="100%" alt="Features bg" />
                </div>
              </Transition>
            </div>
          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
