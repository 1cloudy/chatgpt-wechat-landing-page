import React from "react";
import websites from "../partials/websites.json";

function Discover() {
  return (
    <main className="max-w-6xl mx-auto px-2 sm:px-6 pt-24 pb-8 flex flex-col glow gap-4">
      <h2 className="mt-4 mb-2 !hidden text-2xl tracking-wide font-bold text-gray-900">
        Discover
      </h2>
      <p className="!m-0 text-gray-500">
        发现更多有趣的机器人
      </p>

      <div className="mb-8">
        {websites.map(({ title, items }, siteIndex) => (
          <div className="mb-8" key={`site_${siteIndex}`}>
            <h4 className="mb-4 text-xl font-bold text-gray-900">{title}</h4>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {items.map(({ title, tags, subtitle, logo, url }, itemIndex) => (
                <a key={`link_${itemIndex}`} href={url} target="_blank" rel="noreferrer">
                  <div className="bg-white bg-surface-02dp border border-solid border-surface-02dp flex box-border p-4 h-32 rounded-lg hover:bg-gray-50 cursor-pointer w-full">
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        <h2 className="text-xl mb-2 font-medium text-gray-900">
                          {title}
                        </h2>
                        <div className="text-sm font-normal text-gray-600 line-clamp-3 mb-2">
                          {subtitle}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {tags.map((tag, tagIndex) => (
                          <span
                            key={`tag_${tagIndex}`}
                            className="inline-block bg-purple-100 text-gray-600 text-xs px-2 rounded-full uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="ml-4">
                      <img
                        src={logo}
                        alt="image"
                        className="h-24 w-24 object-contain"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Discover;
