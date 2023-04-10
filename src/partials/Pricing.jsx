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

const pricingTable = [
  {
    name: "Basic",
    price: "Free",
    description: "基础版",
    features: [
      "支持ChatGPT 网页端",
      "支持ChatGPT API",
      "API支持上下文",
      "可自由切换模型",
      "一键开启 Bot 接管",
      "入群欢迎语",
    ],
  },
  {
    name: "Pro",
    price: "¥100",
    description: "专业版",
    features: [
      "包含基础版所有功能",
      "🌟 定义AI身份/角色",
      "🌟 支持 Google Bard",
      "🌟 自定义单用户提问频率",
      "🌟 自定义队列积压告警阈值",
      "🌟 自定义群众提问限额",
    ],
  },
  {
    name: "Max",
    price: "¥300",
    description: "高级版",
    features: [
      "含 Pro 版本所有功能",
      "🌟 支持 Bing Chat",
      "切换多个 Bing Chat 对话模式",
      "🌟 私聊直接触发",
      "🌟 自定义代理服务器",
      "🌟 定制消息模版",
    ],
  },
];

const PlanButton = ({ url, bgColor, hoverColor, text }) => (
  <div className="mt-8">
    <a href={url}>
      <button
        className={`w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform ${bgColor} rounded-lg hover:text-white focus:outline-none ${hoverColor}`}
      >
        {text}
      </button>
    </a>
  </div>
);

const PricingTable = () => (
  <section id="pricing" className="relative pt-8 pb-8 bg-white">
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 mb-4 tracking-wider">更多选择</h1>
      </div>

      <div className="grid gap-6 mt-8 sm:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {pricingTable.map((item, index) => {
          const isProPlan = item.name === "Pro";
          const cardClass = `px-6 py-4 transition-colors duration-200 transform rounded-lg bg-${isProPlan ? "purple-500 text-gray-100" : "gray-100 text-gray-800 " + item.name.toLowerCase()
            } hover:bg-purple-300 hover:text-gray-900 dark:hover:bg-purple-300 dark:hover:text-gray-900`;
          const order = isProPlan ? 2 : index;
          return (
            <div
              key={item.name}
              className={cardClass}
              style={{ order }}
            >
              <div className="flex flex-row justify-between items-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {item.name}
                </div>
                <h4 className="mt-2 text-xl md:text-2xl lg:text-3xl font-semibold">
                  {item.price}
                </h4>
              </div>
              <p className="mt-4 text-sm md:text-base">{item.description}</p>

              <div className="mt-8 space-y-4 md:space-y-8">
                {item.features.map((feature) => {
                  return (
                    <FeatureItem
                      key={feature}
                      title={feature}
                      selected={isProPlan}
                    />
                  );
                })}
              </div>

              {item.name === "Basic" && (
                <PlanButton
                  url="https://aoq.lemonsqueezy.com/checkout?cart=7383c4ac-6a3c-46af-a4c9-7faa3ece0bc8"
                  bgColor="bg-blue-500"
                  hoverColor="focus:bg-blue-600"
                  text="支持开发者"
                />
              )}

              {isProPlan && (
                <PlanButton
                  url="https://aoq.lemonsqueezy.com/checkout?cart=7383c4ac-6a3c-46af-a4c9-7faa3ece0bc8"
              bgColor="bg-purple-400"
              hoverColor="focus:bg-purple-300"
              text="开始升级"
            />
          )}

          {item.name === "Max" && (
            <PlanButton
              url="https://aoq.lemonsqueezy.com/checkout?cart=7383c4ac-6a3c-46af-a4c9-7faa3ece0bc8"
              bgColor="bg-blue-500"
              hoverColor="focus:bg-blue-600"
              text="开始升级"
            />
          )}
        </div>
      );
    })}
  </div>
</div>
  </section>
);
export default PricingTable;

