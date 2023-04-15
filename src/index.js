import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from './Component/Banner/banner';
import Navbar from './Component/Navbar/navbar';
import BannerCard from './Component/Card/card';
import BodyApp from './Component/Body/bodyApp';
import FaqSection from './Component/FaqSection/faqSection';
import Footer from './Component/Footer/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Banner />
    <BannerCard />
    <BodyApp />
    <FaqSection />
    <Footer />
  </React.StrictMode>
);


