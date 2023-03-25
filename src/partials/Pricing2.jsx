import React from "react";

const FeatureItem = ({ title, selected }) => {
  return (
    <div className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 ${selected ? "text-gray-300" : "text-blue-500"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>

      <span className={`mx-4 ${selected ? "text-gray-100" : "text-gray-800"}`}>
        {title}
      </span>
    </div>
  );
};

export default function PricingTable() {
  const pricingTable = {
    basic: {
      name: "Basic",
      price: "Free",
      description: "(仅限个人微信群使用)",
      features: [
        "支持ChatGPT 网页端",
        "支持ChatGPT API",
        "API支持上下文",
        "可自由切换模型",
      ],
    },
    plus: {
      name: "Plus",
      price: "100",
      description: "(仅限个人微信群使用)",
      features: [
        "包含免费版所有功能",
        "🌟 定义AI身份/角色",
        "🌟 一键开启 Bot 接管",
        "🌟 入群欢迎语",
        "🌟 自定义单用户提问频率",
        "🌟 自定义队列积压告警阈值",
      ],
    },
    business: {
      name: "Business",
      price: "300",
      description: "(可用于付费或企业微信群)",
      features: [
        "含 Plus 版本所有功能",
        "🌟 商业授权 (定制消息模版)",
        "🌟 自定义代理服务器",
        "定制其他需求",
        "支持第三方平台接入",
        "过滤敏感词API",
        "模型定制",
      ],
    },
  };

  return (
    <section id="pricing" className="relative pt-8 pb-8 bg-white">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mt-4 mb-4 tracking-wider">更多的选择</h1>
        </div>

        <div className="grid gap-6 mt-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg bg-gray-100 hover:bg-purple-200 dark:hover:bg-gray-700">
            <div className="flex flex-row justify-between items-center">
              <div className="text-3xl font-semibold text-gray-800 dark:text-gray-500">
                {pricingTable.basic.name}
              </div>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-500">
                {pricingTable.basic.price}
              </h4>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {pricingTable.basic.description}
            </p>

            <div className="mt-8 space-y-8">
              {pricingTable.basic.features.map((item) => {
                return <FeatureItem title={item} selected={false} />;
              })}
            </div>

            <button href="#joinus" className="hidden w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              联系我们
            </button>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform bg-gradient-to-b from-purple-500 to-purple-500 rounded-lg ">
            <div className="flex flex-row justify-between items-center">
              <p className="text-3xl font-semibold text-gray-100">
                {pricingTable.plus.name}
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-100">
                ¥{pricingTable.plus.price}
                <span className="text-base font-normal text-gray-100">/年</span>
              </h4>
            </div>

            <p className="mt-4 text-gray-100">
              {pricingTable.plus.description}
            </p>

            <div className="mt-8 space-y-8">
              {pricingTable.plus.features.map((item) => {
                return <FeatureItem title={item} selected={true} />;
              })}
            </div>

            <button href="#joinus" className="hidden w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              联系我们
            </button>
          </div>

          <div className="px-6 py-4 transition-colors duration-200 transform rounded-lg bg-gray-200 hover:bg-purple-200 dark:hover:bg-gray-700">
            <div className="flex flex-row justify-between items-center">
              <p className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                {pricingTable.business.name}
              </p>
              <h4 className="mt-2 text-4xl font-semibold text-gray-800 dark:text-gray-100">
                ¥{pricingTable.business.price}
                <span className="text-base font-normal text-gray-800">/月</span>
              </h4>
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-300">
              {pricingTable.business.description}
            </p>

            <div className="mt-8 space-y-8">
              {pricingTable.business.features.map((item) => {
                return <FeatureItem title={item} selected={false} />;
              })}
            </div>

            <button href="#joinus" className="hidden w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
              联系我们
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
