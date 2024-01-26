import React from 'react';
import { Link, animateScroll } from 'react-scroll'; // Import Link and scroll from react-scroll
import './NavBar.css';
const NavBar = () => {
  const scrollTo = (id) => {
    animateScroll.scrollTo(id, {
      duration: 800,
      smooth: true,
      offset: +200,
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
            <Link to="whatweoffer" smooth={true} duration={800} onClick={() => scrollTo('whatweoffer')}>
              Price List
            </Link>
          </li>
          <li>
            <Link to="Contact" smooth={true} duration={800} onClick={() => scrollTo('Contact')}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="Brands" smooth={true} duration={800} onClick={() => scrollTo('Brands')}>
              Book Now!
            </Link>
          </li>
         
          
            <img id='logo' src='https://lirp.cdn-website.com/87a49eaf/dms3rep/multi/opt/lorka+logo-126w.png' alt="Logo" />
         
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
