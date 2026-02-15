import React from 'react';
import PrivateImage from '../images/private.jpg';
import GroupImage from '../images/group3.jpg';
import WeChatPayImage from '../images/wxzsm.jpg';

const items = [
  {
    img: GroupImage,
    alt: '微信群',
    title: '插件问题交流群',
    desc: '反馈问题、交流提示词和最佳实践。',
  },
  {
    img: PrivateImage,
    alt: '个人微信',
    title: '插件支持',
    desc: '需要深入排障或授权咨询，可联系人工支持。',
  },
  {
    img: WeChatPayImage,
    alt: '赞赏码',
    title: '支持开发者',
    desc: '如果插件帮到了你，欢迎打赏支持持续迭代。',
  },
];

export default function Join() {
  return (
    <section className="relative mt-20" id="joinus">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-pink-600">Community</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">加入社群与支持通道</h2>
        </div>

        <div className="mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-pink-100 bg-white p-5 text-center hover:shadow-md transition">
              <img className="w-36 md:w-44 mx-auto rounded-lg" src={item.img} alt={item.alt} loading="lazy" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
