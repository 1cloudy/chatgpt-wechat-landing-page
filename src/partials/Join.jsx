import React from "react";
import PrivateImage from "../images/private.jpg";
import GroupImage from "../images/group3.jpg";
import TryImage from "../images/try.jpg";
import WeChatPayImage from "../images/wxzsm.jpg";
import AliPayImage from "../images/zfb.jpg";

export default function Join() {
  return (
    <section className="relative mt-16" id="joinus">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mb-4 tracking-wider">加入社群</h1>
        </div>

        {/* Section content */}
        <div className="mb-16 md:mb-16">
          <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-36 md:w-48 mx-auto rounded"
                src={GroupImage}
                width="100%"
                height="100%"
                alt="微信群"
                loading="lazy"
              />
              <div className="text-center pt-6 md:pt-8">插件问题交流群</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-36 md:w-48 mx-auto rounded"
                src={PrivateImage}
                width="100%"
                height="100%"
                alt="个人微信"
                loading="lazy"
              />
              <div className="text-center pt-6 md:pt-8">插件支持[免费用户需先打赏再咨询]</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-36 md:w-48 mx-auto rounded"
                src={WeChatPayImage}
                width="100%"
                height="100%"
                alt="个人微信"
                loading="lazy"
              />
              <div className="text-center pt-6 md:pt-8">支持开发者</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
