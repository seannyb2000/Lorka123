import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/Navbar';
import './HomePage.css';
import Carosel from '../Carosel/Carosel';
import starSVG from '../assets/STAR.svg';  // Import SVG file
const Home = () => {

  return (
    <div>
      <NavBar />

      <div id="OpenMsg" className='background-container'>
        <div className='content'>
          <h1><b>Beauty Training With Proven Results</b></h1>
          <p id="innov"><b>Innovative training in Brand Eduction, Makeup and Beauty Treatments </b></p>
          <a id='learn' href='#'>Learn More</a>
        </div>
      </div>

      <div id='whytrain'>
        <div id='desc'>
        <h1>Why train with Lorka</h1>
          <p>Starting out in the industry or upskilling we have you covered. At lorka we'll help you <br />boost your competative edge so you can secure your future</p>
        </div>

        <div id='reasons' className='gridContainer'>
          <div>
          <div class="grid-item">
              <div className='imgContainer'>
                <img id='img1' src='' alt='image'/>
              </div>

              <div className='textContainer' >
              <h5 className='head'>Experienced Professionals</h5>
              <p className='desc'>The staff at Lorka are all trained professionals who excel in their field. Many of our educators also have s training in many areas of the Beauty Industry.</p>
              </div>
          </div>

            <div class="grid-item">

                <div className='imgContainer'>
                  <img src='#' alt='image'/>
                </div>

                <div className='textContainer' >
                  <h5 className='head'>Unique Approach</h5>
                  <p className='desc'>The Lorka teaching method is based on an innovative and result-oriented technique that helps students overcome barriers to bring concrete results. </p>
                </div>
            </div>
          </div>
          <div>
          <div class="grid-item">

            <div className='imgContainer'>
              <img src='#' alt='image'/>
            </div>

            <div className='textContainer' >
              <h5 className='head'>Private or Small Groups</h5>
              <p className='desc'>Some people learn best on their own; others prefer learning in groups. At Lorka , you can choose the environment that works best for you. </p>
            </div>
            </div>

            <div class="grid-item">

              <div className='imgContainer'>
                <img src='#' alt='image'/>
              </div>

              <div className='textContainer' >
                <h5 className='head'>Industry Focused Courses</h5>
                <p className='desc'>Every course is industry focused for optimal effectiveness. We work with only innovative and proven Brands as our partners and ares    brand educators for these brands.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  id='About'>
        <div id='abImgContainter'>
          <img src=''/>
        </div>
        <div id='abtxtcontainer'>
            <h3><b>About Us</b></h3>
            <p> Lorka  is a training academy that provides top notch training in a variety of subjects. We offer both private and small group sessions, so you can choose exactly the training style you like best. Our training academy is distinguished by the high level of service and support we provide to our students, deep knowledge of our Industry and the brands and Accreditations we offer , a unique Brand educators service for cosmetic, skin care and beauty treatment Start ups and Already established Brands   and most importantly, the high caliber of our tutors who are experts in Their fields.</p>
            <a>Call Us</a>
        </div>
      </div>

      <div id='caro'>
        <Carosel/>
      </div>


    </div>
  );
};

export default Home;
