import React from 'react';
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: <div className="font-semibold">插件适合什么场景？</div>,
      content: '适用于微信群聊、私聊与文件传输助手中的高频问答、客服回复、运营助手等场景。',
    },
    {
      title: <div className="font-semibold">需要自己搭建服务器吗？</div>,
      content: '不需要。插件在浏览器侧运行，完成登录和参数配置后即可开始使用。',
    },
    {
      title: <div className="font-semibold">为什么 @机器人 没有响应？</div>,
      content:
        '请先检查插件连接状态、AI 源登录状态，以及提问字数是否达标。若仍失败，建议刷新页面并重试。',
    },
    {
      title: <div className="font-semibold">微信网页版提示无法登录怎么办？</div>,
      content: (
        <span>
          可尝试带参数访问{' '}
          <a className="text-pink-600 underline" href="https://wx.qq.com/?target=t" target="_blank" rel="noreferrer">
            https://wx.qq.com/?target=t
          </a>
          ，并从插件页面入口重新登录。
        </span>
      ),
    },
    {
      title: <div className="font-semibold">是否支持商业使用？</div>,
      content: (
        <span>
          默认协议以个人使用为主。商业场景请先阅读{' '}
          <a className="text-pink-600 underline" href="https://aow.me/tos" target="_blank" rel="noreferrer">
            用户协议
          </a>
          与{' '}
          <a className="text-pink-600 underline" href="https://aow.me/disclaimer" target="_blank" rel="noreferrer">
            免责声明
          </a>
          ，如需授权请联系 support。
        </span>
      ),
    },
    {
      title: <div className="font-semibold">如何获取更多使用文档？</div>,
      content: (
        <a className="text-pink-600 underline" href="https://docs.aow.me" target="_blank" rel="noreferrer">
          打开使用指南与更新文档
        </a>
      ),
    },
  ],
};

export default function FAQ() {
  return (
    <section className="relative mt-20" id="faq">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-pink-600">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">常见问题</h2>
        </div>

        <div className="mb-16 rounded-2xl border border-pink-100 bg-white p-4 sm:p-6">
          <Faq data={data} />
        </div>
      </div>
    </section>
  );
}
