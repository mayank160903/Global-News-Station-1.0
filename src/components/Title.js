import React from 'react';
import './Title.css';
import DateTime from './DateTime.js';
// import Search from './Search';
import logo from './logo2.jpg';

const Title = () => {
  return (
    <div className='parent container flex-parent'>
      <div className='child flex-child'>
      <DateTime />
      </div>
      
        <div className="main-title child flex-child">
        <img className='news-logo' src={logo} height={50} width={50} alt=''/>
        THE GLOBAL NEWS STATION
        </div>
        <div className="child flex-child">
          {/* <Search /> */}
        </div>
    </div>
  )
}

export default Title

// https://st2.depositphotos.com/6789684/12262/v/600/depositphotos_122620866-stock-illustration-illustration-of-flat-icon.jpg