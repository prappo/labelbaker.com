import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import FeatureCards from '../partials/FeatureCards';
import CreateFeature from '../partials/CreateFeature';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        
        {/* Feature cards */}
        <FeatureCards />

        {/* how it works video section */}
        <CreateFeature />
        {/* <FeaturesBlocks /> */}
        {/* <Testimonials /> */}
        {/* <Newsletter /> */}

      </main>

      {/* <Banner /> */}

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;