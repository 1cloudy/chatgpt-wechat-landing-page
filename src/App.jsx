import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import 'aos/dist/aos.css';
import './css/style.css';
import AOS from 'aos';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Header from './partials/Header'; // 修改为您的 Header 组件的实际路径


function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]);

  return (
    <>
      {/* 添加导航链接 */}
       <Header />

      {/* 配置路由 */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
      </Routes>
    </>
  );
}

export default App;
