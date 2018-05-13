import React from 'react';
import './home-banner.css';
import BannerGif from '../../layout/components/images/banner.gif';

const bannerStyle = {
  backgroundImage: `url(${BannerGif})`
};

const HomeBanner = ({ authenticated }) => (
  <section className="app-banner" style={bannerStyle}>
    <aside>
      <div>
        <h1 className="app-banner-title">Experiencias vividas sobre Desarrollo de Aplicaciones, Cloud Computing y DevOps.</h1>
        {
          !authenticated &&
          <button className="btn-green btn-join">Unete Ahora!</button>
        }
      </div>
    </aside>
  </section>
);

export default HomeBanner;