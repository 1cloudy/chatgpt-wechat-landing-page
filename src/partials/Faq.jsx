import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">ChatGPT 是什么？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>ChatGPT 是由 OpenAI 开发的一种大型自然语言处理（NLP）模型</p>
                    <ul className="list-decimal leading-8">
                        <li>1. 可以回答关于各种话题的问题，例如历史、科学、文化等。它可以提供相关的信息和细节，并且能够根据上下文作出适当的回应。</li>
                        <li>2. 可以参与自然对话，即能够与人类进行多轮交流，并作出相应的回应。它可以通过文本或语音与人类交流，并理解他们的意图，从而使对话更加流畅自然。</li>
                        <li>3. 可以提供建议和帮助，例如在人类面临某些问题或困难时，它可以提供可行的解决方案。它可以理解人类的需求，并根据他们的问题提供适当的帮助。</li>
                        <li>4. 可以作为学习工具，即人类可以通过与它交流来提高他们的语言能力和知识水平。它可以提供丰富的信息和知识，并且能够持续不断地学习和更新，从而为人类提供更多的学习机会。</li>
                        <li>5. 可以作为客服或人工智能助手使用，即能够与人类进行交流，并帮助他们解决问题。它可以用于提供客户服务或帮助人们完成日常任务，从而提高工作效率和满意度。</li>
                    </ul>
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">这个插件可以用来做什么？</div>,
            content:
                <div className="leading-8 mb-1">
                    这个插件可以帮助你快速搭建一个基于微信聊天的智能应答机器人，不需要任何服务器资源，只需要登录微信网页版页面和 ChatGPT 页面<span className="text-green-500">（推荐）</span>或配置 OpenAI apikey 即可。
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">使用这个插件我该注意点什么？
            </div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 使用本插件前，请您仔细阅读本插件<a className="text-blue-500" href="https://aow.me/tos" target="_blank">用户协议</a>和<a className="text-blue-500" href="https://aow.me/disclaimer" target="_blank">免责声明</a>，如果您不同意该协议或声明，请立即卸载或删除本插件。</li>
                        <li>2. 本插件仅供个人使用，不得用于任何商业用途，包括但不限于付费微信群、企业微信群等。如果您需要商业使用本插件，请联系我们进行授权。联系方式：<a className="text-blue-500" href="mailto:contact@aow.me">contact@aow.me</a></li>
                        <li>3. 本插件仅提供功能增强和便利性，我们不对插件使用过程中产生的任何问题和损失承担责任。</li>
                        <li>4. 本插件的版权归AOW.ME所有。未经许可，不得对插件进行修改、复制、分发或销售。</li>
                        <li>5. 我们有权在必要时修改插件的功能、界面、使用方式等内容。</li>
                        <li>6. 如果您对本插件有任何使用建议，请通过微信与 <span className="text-blue-500">AS</span> 联系或发送邮件告知我们 <a className="text-blue-500" href="mailto:feedback@aow.me">feedback@aow.me</a>。</li>
                    </ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">想开通付费版，但不需要多开，只开一个Licesen，如何操作？
            </div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>如果您只需1个License，可以点击此处<a className="tex-purple-500" href="https://aoq.lemonsqueezy.com/checkout/buy/8e5b8ecd-31fa-458b-a033-4e754d4c381a" target="_blank">购买单次激活码</a></li>
                        <li>在购买成功后，复制激活码至插件升级。如果因初始操作不当，导致激活码失效，请微信联系 Asgrief 重新激活。</li>
                    </ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">使用插件时，显示“ChatGPT 网页链接异常"</div>,
            content:
                <div className="leading-8 mb-1">
                    如果你在使用插件时出现这个提示：<span className="text-blue-600">“ChatGPT 网页链接异常”，错误信息：CloudFlare</span>请选择使用API源。添加你的API-Key，继续使用。<br /> 同时，请注意：群聊版插件仅可以在客户端请求时响应，比如在手机微信中@登录微信昵称。
                </div>,
        },

        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">微信网页版无法登录怎么办？</div>,
            content:
                <div className="leading-8 mb-1">
                    如果你在访问微信网页版时出现这个提示：<span className="text-gray-400">“为了保障你的帐号安全，暂不支持使用网页版微信。你可以前往微信官网 https://weixin.qq.com/ 下载客户端登录。”</span>。<br />请按照以下步骤操作：
                    <ul className="list-decimal leading-8">
                        <li>1. 打开微信网页版页面，地址：<a className="text-blue-500" href="https://wx.qq.com/?target=t" target="_blank">https://wx.qq.com/<b>?target=t</b></a>。<span className="text-yellow-500">注意：务必带上后面的请求参数！</span></li>
                        <li>2. 请通过插件设置页面右上角，点击<span className="text-green-400">微信网页版</span>登录后，使用。</li>
                    </ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人，但是没有任何响应？</div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 请在 Chrome 浏览器导航栏找到本插件的图标，点击图标，看弹窗中的 ChatGPT 页面是否处于登录状态。如果未登录，请尝试多点击几次插件图标。</li>
                        <li>2. 插件对提问字数做了限制，问题内容（不包括@昵称）需要超过2个字符才会触发 ChatGPT 的响应。</li>
                        <li>3. 检查自己的微信昵称中是否存在表情符号或其他特殊字符，如果存在请修改为简单的昵称，建议只用数字、字母或中文，修改完毕后刷新微信网页版页面。</li>
                    </ul>
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人的消息要好久才收到，感觉响应很慢？</div>,
            content:
                <div className="leading-8 mb-1">
                    因为 ChatGPT 的响应是异步数据流，在网页上可以实时刷新数据流响应，但在微信消息中只能等收到完整结果后一次发送，所以体验上感觉会有30秒左右的延迟，具体视 ChatGPT 的响应内容多少而定，这是正常现象。
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么会收到“抱歉，ChatGPT 服务异常”的消息？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>以下几种情况可能导致返回上面的错误提示：</p>
                    <ul className="list-decimal leading-8">
                        <li>1. 因为 ChatGPT 加了 Cloudflare 保护，每隔2小时需要刷新一下 ChatGPT 页面，如果用户提问后收到上述错误提示，说明<a href="https://chat.openai.com/chat" target="_blank">https://chat.openai.com/chat</a>页面需要刷新或重新登录。</li>
                        <li>2. 因为 ChatGPT 的并发限制，一次只能发送一条消息。请在发送另一条消息之前等待其他问题的响应完成，或者等待一分钟。</li>
                        <li>3. 因为 ChatGPT 自身的服务异常，导致请求出错或网络错误等原因。</li>
                        <li>4. 因为网络原因，如使用 VPN、加速器等导致频繁出现 Cloudflare 错误，需自行解决。</li>
                    </ul>
                </div>,
        },
    ],
};

export default function FAQ() {
    return (
        <section className="relative mt-16">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                {/* Section header */}
                <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
                    <h1 className="h2 mb-4 tracking-wider">常见问题</h1>
                </div>

                {/* Section content */}
                <div className="mb-16 md:mb-16">
                    <Faq data={data} />
                </div>
            </div>
        </section>
    );
}