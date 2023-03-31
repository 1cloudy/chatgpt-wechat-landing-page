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
        price: "基础版",
        description: "开发不易，赞赏后使用",
        features: [
            "支持ChatGPT 网页端",
            "支持ChatGPT API",
            "API支持上下文",
            "可自由切换模型",
        ],
    },
    {
        name: "Pro",
        price: "¥100",
        description: "赞赏后，升级解锁更多功能",
        features: [
            "包含基础版所有功能",
            "🌟 定义AI身份/角色",
            "🌟 一键开启 Bot 接管",
            "🌟 入群欢迎语",
            "🌟 自定义单用户提问频率",
            "🌟 自定义队列积压告警阈值",
        ],
    },
    {
        name: "Max",
        price: "¥300",
        description: "赞赏后，升级解锁更多功能",
        features: [
            "含 Pro 版本所有功能",
            "🌟 自定义代理服务器",
            "🌟 获赠第三方平台Pro版",
            "🌟 体验更多AI源（即将上线）",
        ],
    },
];

const PricingTable = () => {
    return (
        <section id="pricing" className="relative pt-8 pb-8 bg-white">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
            <h1 className="h2 mt-4 mb-4 tracking-wider">更多选择</h1>
          </div>
      
          <div className="grid gap-6 mt-8 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {pricingTable.map((item, index) => {
              const isProPlan = item.name === "Pro";
              const cardBg = isProPlan ? "bg-purple-500 text-gray-100" : "bg-gray-100 text-gray-800";
              const order = isProPlan ? 2 : index;
              return (
                <div
                  key={item.name}
                  className={`px-6 py-4 transition-colors duration-200 transform rounded-lg ${cardBg} hover:bg-purple-200 hover:text-gray-900 dark:hover:bg-purple-200 dark:hover:text-gray-900`}
                  style={{ order }}
                >
                  <div className="flex flex-row justify-between items-center">
                    <div className="text-3xl font-semibold">
                      {item.name}
                    </div>
                    <h4 className="mt-2 text-4xl font-semibold">
                      {item.price}
                    </h4>
                  </div>
                  <p className="mt-4">{item.description}</p>
      
                  <div className="mt-8 space-y-8">
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
      
                  {isProPlan && (
                    <a href="https://docs.aow.me" className="w-full">
                    <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-gray-900 capitalize transition-colors duration-200 transform bg-purple-100 rounded-lg hover:text-gray-900 focus:outline-none focus:bg-purple-300">
                      支持开发者
                    </button>
                  </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
};

export default PricingTable;

