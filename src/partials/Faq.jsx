import React from "react";
import Faq from "react-faq-component";

const data = {
    rows: [
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">ChatGPT是什么？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>ChatGPT是由 OpenAI 开发的一种大型自然语言处理（NLP）模型</p>
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
                    这个插件可以帮助你快速搭建一个基于微信聊天的智能应答机器人，不需要任何服务器资源，只需要登录微信网页版页面和ChatGPT页面即可。
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">微信网页版无法登录怎么办？</div>,
            content:
                <div className="leading-8 mb-1">
                    如果你在访问微信网页版时，提示这个错误：“为了保障你的帐号安全，暂不支持使用网页版微信。你可以前往微信官网 https://weixin.qq.com/ 下载客户端登录。”，可以下载这个补丁插件<a href="https://aow.me/chatgpt4wechat_fix" target="_blank">https://aow.me/chatgpt4wechat_fix</a> 或参考 <a href="https://github.com/adamyi/wechrome">Github</a> 自行解决。
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人，但是没有任何响应</div>,
            content:
                <div className="leading-8 mb-1">
                    <ul className="list-decimal leading-8">
                        <li>1. 请在chrome浏览器导航栏找到本插件的图标，点击图标，看弹窗中的chatgpt页面是否处于登录状态。如果未登录，请尝试多点击几次插件图标。</li>
                        <li>2. 插件对提问字数做了限制，问题内容（不包括@昵称）需要超过2个字符才会触发chatgpt的响应。</li>
                    </ul>
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么@机器人的消息要好久才收到，感觉响应很慢</div>,
            content:
                <div className="leading-8 mb-1">
                    因为ChatGPT的响应是异步数据流，在网页上可以实时刷新数据流响应，但在微信消息中只能等收到完整结果后一次发送，所以体验上感觉会有30秒左右的延迟，具体视ChatGPT的响应内容多少而定，这是正常现象。
                </div>
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么会收到“抱歉，ChatGPT服务异常”的消息？</div>,
            content:
                <div className="leading-8 mb-1">
                    <p>以下几种情况可能导致返回上面的错误提示：</p>
                    <ul className="list-decimal leading-8">
                        <li>1. 因为ChatGPT加了cloudflare保护，每隔2小时需要刷新一下ChatGPT页面，如果用户提问后收到上述错误提示，说明<a href="https://chat.openai.com/chat" target="_blank">https://chat.openai.com/chat</a>页面需要刷新或重新登录。</li>
                        <li>2. 因为ChatGPT的并发限制，一次只能发送一条消息。请在发送另一条消息之前等待其他问题的响应完成，或者等待一分钟。</li>
                        <li>3. 因为ChatGPT自身的服务异常，导致请求出错或网络错误等原因。</li>
                    </ul>
                </div>,
        },
        {
            title: <div class="font-bold leading-snug tracking-wide mb-1">为什么刷新微信页面后，会收到很多重复的提问消息？
            </div>,
            content:
                <div className="leading-8 mb-1">
                    这是一个Bug，目前暂无修复方案。可以点击微信网页版页面，左侧头像旁边的三道横杠的图标，尝试关闭小铃铛解决。
                </div>,
        }
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