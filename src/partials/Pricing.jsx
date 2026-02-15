import React from 'react';

const pricingTable = [
  {
    name: 'Basic',
    price: 'Free',
    period: '',
    description: '个人试用，快速体验核心流程',
    features: [
      '支持 ChatGPT 网页端',
      '支持 Gemini 等 AI 源',
      '单用户提问限额',
      '单群组提问限额',
      '入群欢迎语',
      '一键开启 Bot',
    ],
    cta: '支持开发者',
    url: 'https://aoq.lemonsqueezy.com/checkout/buy/5a495255-6fd6-4997-841e-e061468eebf2?utm_source=landing&utm_medium=pricing&utm_campaign=basic',
  },
  {
    name: 'Pro',
    price: '¥79',
    period: '/月',
    description: '高频用户与小团队首选',
    features: [
      '支持 ChatGPT API',
      '自定义 AI 身份/角色',
      '用户提问无限制',
      '群组提问无限制',
      '队列积压告警阈值',
      '私聊直接触发',
      'License 可激活 3 次',
    ],
    cta: '开始升级',
    url: 'https://aoq.lemonsqueezy.com/checkout/buy/8b72467f-1d08-485c-9131-45f1478302ec?utm_source=landing&utm_medium=pricing&utm_campaign=pro',
    highlighted: true,
  },
  {
    name: 'Max',
    price: '¥199',
    period: '/季',
    description: '更高控制力与自定义能力',
    features: ['包含 Pro 所有功能', '支持自定义代理服务器', 'License 可激活 3 次'],
    cta: '开始升级',
    url: 'https://aoq.lemonsqueezy.com/checkout/buy/4e71571a-aec8-4bfb-84ae-f6cb9abec340?utm_source=landing&utm_medium=pricing&utm_campaign=max',
  },
];

const PricingTable = () => (
  <section className="relative mt-20" id="pricing">
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-pink-600">Pricing</p>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">按使用场景选择最合适的版本</h2>
        <p className="mt-4 text-gray-600">从试用到高频团队使用，逐步升级而不是一次性重投入。</p>
        <a
          href="https://docs.aow.me/docs/account_management"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 text-pink-600 hover:text-pink-700 underline"
        >
          升级前必看：账号与激活说明
        </a>
      </div>

      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {pricingTable.map((item) => (
          <div
            key={item.name}
            className={`rounded-2xl border p-6 transition shadow-sm hover:shadow-md ${
              item.highlighted
                ? 'border-pink-300 bg-gradient-to-b from-pink-50 to-white'
                : 'border-gray-200 bg-white'
            }`}
          >
            {item.highlighted && (
              <span className="inline-flex mb-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-pink-600 text-white">
                推荐
              </span>
            )}
            <div className="flex items-end justify-between gap-3">
              <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
              <div className="text-right">
                <p className="text-3xl font-extrabold text-gray-900">{item.price}</p>
                <p className="text-sm text-gray-500">{item.period}</p>
              </div>
            </div>
            <p className="mt-2 text-gray-600">{item.description}</p>

            <ul className="mt-6 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-gray-700">
                  <svg className="w-5 h-5 text-pink-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className={`mt-8 inline-flex w-full justify-center px-4 py-3 rounded-lg font-semibold transition ${
                item.highlighted
                  ? 'bg-pink-600 text-white hover:bg-pink-700'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {item.cta}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingTable;
