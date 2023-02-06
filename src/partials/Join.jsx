import React from "react";
import PrivateImage from "../images/private.jpg";
import GroupImage from "../images/group2.jpg";

export default function Join() {
  return (
    <section id="joinus" className="relative mt-10 xl:mt-2">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
          <h1 className="h2 mb-4 tracking-wider">加入社群</h1>
        </div>

        {/* Section content */}
        <div className="mb-16 md:mb-16">
          <div class="grid grid-flow-col grid-cols-2 gap-8">
            <div className="flex items-center justify-center">
              <img
                className="w-36 md:w-48 mx-auto rounded"
                src={PrivateImage}
                width="100%"
                height="100%"
                alt="个人微信"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                className="w-36 md:w-48 mx-auto rounded"
                src={GroupImage}
                width="100%"
                height="100%"
                alt="微信群"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
