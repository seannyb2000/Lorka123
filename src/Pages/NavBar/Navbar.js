import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  

  return (
    <header className="header">
      <nav>
        <ul className='navbar fade-in-border'>
          <li>Brand Education</li>
          <li>About</li>
          <li>Our Team</li>
          <li>What we offer</li>
          <li>Special offers</li>
          <img className='socials'></img>
          <img className='socials'></img>
          <img className='socials'></img>
          <img id='logo' src='https://lirp.cdn-website.com/87a49eaf/dms3rep/multi/opt/lorka+logo-126w.png'/>
        </ul>
      </nav>
      
    </header>
  );
};

export default NavBar;
