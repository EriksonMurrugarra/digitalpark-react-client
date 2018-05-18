import React from 'react';
import LoadingGIF from './images/loading.gif';

const Loader = ({ text }) => {
  const loaderText = text || 'Loading ...';

  return (
    <div style={{width: 200, margin: '10px auto' }}> <img src={LoadingGIF} alt="loading" />{ loaderText }</div>
  );
}

export default Loader;