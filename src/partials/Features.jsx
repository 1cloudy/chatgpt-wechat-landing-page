import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg1 from '../images/features-wechat_web.jpg';
import FeaturesBg2 from '../images/features-chatgpt.jpg';
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
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mb-4 tracking-wider">如何使用</h1>
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
                  <div className="font-bold leading-snug tracking-wide mb-1">1. 打开微信网页版页面</div>
                  <div className="text-gray-600">首先，你需要有一个可以支持微信网页版 <a className="text-blue-500" href="https://wx.qq.com" target="_blank">https://wx.qq.com</a> 登录的微信号，若无法登录请看常见问题第三条</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(2); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">2. 打开 ChatGPT 的页面</div>
                  <div className="text-gray-600">其次，你需要有ChatGPT账号并保持页面 <a className="text-blue-500" href="https://chat.openai.com" target="_blank">https://chat.openai.com</a> 处于登录状态</div>
                </div>
              </a>
              <a
                className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                href="#0"
                onClick={(e) => { e.preventDefault(); setTab(3); }}
              >
                <div>
                  <div className="font-bold leading-snug tracking-wide mb-1">3. 触发 ChatGPT 应答微信消息</div>
                  <div className="text-gray-600">最后，在微信群组或私信中 <span className="text-blue-500">@你的昵称</span> 验证是否能收到 ChatGPT 的回复</div>
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
