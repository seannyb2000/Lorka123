import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'; // Import Link and scroll from react-scroll
import './NavBar.css';

const NavBar = () => {
  const scrollTo = (id) => {
    scroll.scrollTo(id, {
      duration: 800, // You can adjust the duration of the scroll
      smooth: true,
    });
  };

  return (
    <header className="header">
      <nav>
        <ul className='navbar fade-in-border'>
          <li>
            <Link to="About" smooth={true} duration={800} onClick={() => scrollTo('About')}>
              About
            </Link>
          </li>
          <li>
            <Link to="ourteam" smooth={true} duration={800} onClick={() => scrollTo('ourteam')}>
              Our Team
            </Link>
          </li>
          <li>
            <Link to="Offer" smooth={true} duration={800} onClick={() => scrollTo('Offer')}>
              What we offer
            </Link>
          </li>
          <li>
            <Link to="specialOffers" smooth={true} duration={800} onClick={() => scrollTo('specialOffers')}>
              Special offers
            </Link>
          </li>
         
          
            <img id='logo' src='https://lirp.cdn-website.com/87a49eaf/dms3rep/multi/opt/lorka+logo-126w.png' alt="Logo" />
         
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
