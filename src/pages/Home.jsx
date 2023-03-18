import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Footer from '../partials/Footer';
import Join from '../partials/Join';
import FAQ from '../partials/Faq';
import Pricing from '../partials/Pricing';
import Pricing2 from '../partials/Pricing2';
import Popup from '../partials/Popup';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        {/* <Pricing /> */}
        <Pricing2 />
        <Join />
        <FAQ />

      </main>

      <Popup />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;