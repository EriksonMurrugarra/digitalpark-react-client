import React from 'react';
import './home-banner.css';
import BannerGif from '../../layout/components/images/banner.gif';

const bannerStyle = {
  backgroundImage: `url(${BannerGif})`
};

const HomeBanner = () => (
  <section className="app-banner" style={bannerStyle}>
    <aside>
      <div>
        <h1 className="app-banner-title">Compartiendo experiencias sobre Desarrollo de Aplicaciones, Cloud Computing y DevOps.</h1>

      </div>
    </aside>
  </section>
);

export default HomeBanner;