import React from "react";

export default function PricingTable() {
    return (
        <section id="pricing" className="relative mt-16 pt-16 pb-16 bg-gray-200">
            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div class="flex flex-col sm:flex-row justify-center mb-6 sm:mb-0">
                    <div class="sm:flex-1 lg:flex-initial lg:w-1/4 hover:bg-blue-100 hover:text-blue-500 rounded-lg bg-white mt-4 mr-12 ml-12 flex flex-col">
                        <div class="p-8 text-2xl font-bold text-center">Free <br /><span class="text-sm">(仅限个人微信群使用)</span></div>
                        <div class="border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                支持ChatGPT 网页端
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                ChatGPT 网页端模型可选（已支持4.0）
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                支持ChatGPT API gpt4 模型
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                API支持上下文
                            </div>
                        </div>
                        <div class="w-full text-center px-8 pt-8 pb-4 text-xl mt-auto">
                        </div>
                    </div>
                    <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-lg hover:bg-blue-100  hover:text-blue-500 bg-white mt-4 sm:-mt-4 shadow-lg z-30 flex flex-col">
                        <div class="w-full p-8 text-2xl font-bold text-center">Plus<br /><span class="text-sm">(仅限个人微信群使用)</span></div>
                        <div class="w-full border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                包含免费版所有功能
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 一键开启 Bot 接管
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 入群欢迎语
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 自定义单用户提问频率
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 自定义队列积压告警阈值
                            </div>
                        </div>
                        <div class="w-full text-center px-8 pt-8 pb-4 text-xl mt-auto">
                            ¥ 60
                        </div>
                        <div class="w-full text-center px-8 pb-8 mt-auto text-gray-500 text-sm">
                            购买升级密钥，请添加微信：Asgrief。
                        </div>
                    </div>
                    <div class="flex-1 lg:flex-initial lg:w-1/4 rounded-lg hover:bg-blue-100  hover:text-blue-500 bg-white mt-4 mr-12 ml-12 flex flex-col">
                        <div class="p-8 text-2xl font-bold text-center">商业版<br /><span class="text-sm">(可用于付费或企业微信群)</span></div>
                        <div class="border-0 border-grey-light border-t border-solid text-sm">
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                含 Plus 版本所有功能
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 定义AI身份/角色
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                🌟 商业授权
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                过滤敏感词API
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                模型定制
                            </div>
                            <div class="text-center border-0 border-grey-light border-b border-solid py-3">
                                定制其他需求
                            </div>
                        </div>
                        <div class="w-full text-center px-8 pt-8 pb-8 text-xl mt-auto">
                            联系咨询
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}