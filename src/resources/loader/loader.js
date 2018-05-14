import React from 'react';
import LoadingGIF from './images/loading.gif';

const Loader = ({ text }) => {
  const loaderText = text || 'Loading ...';

  return (
    <div> <img src={LoadingGIF} alt="loading" />{ loaderText }</div>
  );
}

export default Loader;