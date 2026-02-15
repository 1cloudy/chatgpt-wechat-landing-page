import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg1 from '../images/aisource.png';
import FeaturesBg2 from '../images/botset.png';
import FeaturesBg3 from '../images/features-wechat_message.jpg';

function Features() {
  const [tab, setTab] = useState(1);
  const tabs = useRef(null);

  const heightFix = () => {
    if (!tabs.current) return;
    const tabElement = tabs.current.children[tab - 1];
    if (tabElement) {
      tabs.current.style.height = `${tabElement.offsetHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, [tab]);

  return (
    <section className="relative mt-20" id="how-it-works">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/40 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-pink-600">How It Works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">三步启动你的微信 AI 助手</h2>
          <p className="mt-4 text-gray-600">从安装到上线，用最短路径完成配置并开始稳定使用。</p>
        </div>

        <div className="md:grid md:grid-cols-12 md:gap-8 items-start">
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-5" data-aos="fade-right">
            <div className="mb-8 md:mb-0">
              {[
                {
                  id: 1,
                  title: '1. 安装插件并连接 AI 源',
                  desc: '打开插件设置页，选择网页登录模式或 API 模式，确保 AI 源处于登录状态。',
                },
                {
                  id: 2,
                  title: '2. 配置 Bot 规则与限额',
                  desc: '按群聊或私聊场景设置触发方式、提问频率、告警阈值和默认提示词。',
                },
                {
                  id: 3,
                  title: '3. 在微信中触发自动回复',
                  desc: '在群聊或私聊中使用 @昵称 + 问题，即可调用 AI 回复并持续迭代质量。',
                },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`w-full text-left flex items-start p-5 rounded-xl border transition duration-300 ease-in-out mb-3 ${tab === item.id
                    ? 'bg-pink-100 border-pink-200'
                    : 'bg-white border-gray-200 hover:border-pink-200 hover:shadow-md'
                    }`}
                  onClick={() => setTab(item.id)}
                >
                  <div>
                    <div className="font-semibold text-lg leading-snug tracking-wide mb-1 text-gray-900">{item.title}</div>
                    <div className="text-gray-600 leading-relaxed">{item.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-6 lg:col-span-7 mb-8 md:mb-0"
            data-aos="zoom-y-out"
            ref={tabs}
          >
            <div className="relative flex flex-col text-center lg:text-right bg-white overflow-hidden">
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
                <img className="w-full rounded-xl" src={FeaturesBg1} alt="配置 AI 源" loading="lazy" />
              </Transition>

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
                <img className="w-full rounded-xl" src={FeaturesBg2} alt="设置 bot 参数" loading="lazy" />
              </Transition>

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
                <img className="w-full rounded-xl" src={FeaturesBg3} alt="微信群触发回复" loading="lazy" />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
