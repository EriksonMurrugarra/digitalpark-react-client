import React from 'react';
import './app-banner.css';
import BannerGif from './images/banner.gif';

const bannerStyle = {
  backgroundImage: `url(${BannerGif})`
};

const AppBanner = () => (
  <section className="app-banner" style={bannerStyle}>
    <aside>
      <div>
        <h1 className="app-banner-title">Experiencias vividas sobre Programación, Cloud y DevOps.</h1>
        <button className="btn-green btn-join">Unete Ahora!</button>
      </div>
    </aside>
  </section>
);

export default AppBanner;