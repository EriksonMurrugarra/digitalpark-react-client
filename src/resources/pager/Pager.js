import React from 'react';
import './pager.css';

const Pager = ({ current, pages, onPageSelected }) => {
  const pageItems = [];

  for(let i = 1; i <= pages; i++) {
    pageItems.push(<li  className={(current === i)? 'active': ''} onClick={() => onPageSelected(i)} key={`page${i}`}>{ i }</li>);
  }

  return (
    <div className="pager">
      <ul>
        { pageItems }
      </ul>
    </div>
  );
}

export default Pager;