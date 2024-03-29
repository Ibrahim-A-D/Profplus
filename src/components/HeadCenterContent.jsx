import React from 'react'
import './HeaderCenterContent.css';
import SearchBar from './SearchBar';


function HeadCenterContent() {
    return (
      <div className="center__content">
        <h1>IL T'ATTEND... TON PROF'</h1>
        <SearchBar />
        <div className="contact">
          <i className="fas fa-headset "></i>
        </div>
      </div>
    );
}

export default HeadCenterContent
