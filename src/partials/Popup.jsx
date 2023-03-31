import React from "react";
import "./Popup.css";
// Option
import CookieConsent from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="popup">
      {/* option */}
      <CookieConsent
        disableStyles
        location="none"
        buttonText="我已知晓上述内容"
        cookieName="accept"
        overlay
        buttonWrapperClasses="flex justify-center mt-4"
        buttonClasses="btn btn-primary bg-blue-100"
        overlayClasses="overlayclass"
        style={{ background: "white" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        <p className="text-gray-800">在使用本插件前，请您仔细阅读本插件<a className="text-blue-500" href="https://aow.me/tos" target="_blank">用户协议</a>及<a className="text-blue-500" href="https://aow.me/disclaimer">免责声明</a>。如果您不同意用户协议和免责声明中的任意内容，请不要安装本插件。如果您对相关条款有疑问，请通过<span className="text-blue-500">contact@aow.me</span>与我们取得联系，我们将向您解释条款内容。感谢您的理解和支持！</p>
      </CookieConsent>
    </div>
  );
};

export default Popup;