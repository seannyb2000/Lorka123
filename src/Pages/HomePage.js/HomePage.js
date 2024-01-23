import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/Navbar';
import './HomePage.css';
import starSVG from '../assets/STAR.svg';  // Import SVG file
import lorraine from '../assets/Lorraine_carosel_pic.png'
import kara from '../assets/Kara_carousel_pic.png'
import justina from '../assets/Justina_carousel_pic.png'
import experience from '../assets/experience.png'
import small from '../assets/small.png'
import unique from '../assets/unique.png'
import industry from '../assets/industry.png'
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
          <div className="grid-item">
              <div className='imgContainer'>
                <img  src={experience}></img>
              </div>

              <div className='textContainer' >
              <h5 className='head'>Experienced Professionals</h5>
              <p className='desc'>The staff at Lorka are all trained professionals who excel in their field. Many of our educators also have s training in many areas of the Beauty Industry.</p>
              </div>
          </div>

            <div className="grid-item">

                <div className='imgContainer'>
                <img  src={unique}></img>
                </div>

                <div className='textContainer' >
                  <h5 className='head'>Unique Approach</h5>
                  <p className='desc'>The Lorka teaching method is based on an innovative and result-oriented technique that helps students overcome barriers to bring concrete results. </p>
                </div>
            </div>
          </div>
          <div>
          <div className="grid-item">

            <div className='imgContainer'>
              <img src={small}></img>
            </div>

            <div className='textContainer' >
              <h5 className='head'>Private or Small Groups</h5>
              <p className='desc'>Some people learn best on their own; others prefer learning in groups. At Lorka , you can choose the environment that works best for you. </p>
            </div>
            </div>

            <div className="grid-item">

              <div className='imgContainer'>
              <img src={industry}></img>
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
        </div>
        <div id='abtxtcontainer'>
            <h3><b>About Us</b></h3>
            <p> Lorka  is a training academy that provides top notch training in a variety of subjects. We offer both private and small group sessions, so you can choose exactly the training style you like best. Our training academy is distinguished by the high level of service and support we provide to our students, deep knowledge of our Industry and the brands and Accreditations we offer , a unique Brand educators service for cosmetic, skin care and beauty treatment Start ups and Already established Brands   and most importantly, the high caliber of our tutors who are experts in Their fields.</p>
            <a id='callbtn'>Call Us</a>
        </div>
      </div>
<div className='ourteam'>
<p id='ourteamheader'>
  <span id='meet'>Meet The</span>
  <span id='team'> Team!</span>
</p>



  <div className="row" id="fadeRow">
    <div className="column">
      <div className="card">
        <img id='lor' src={lorraine} alt="Lorraine" />
        <div className="container">
          <h2>Lorraine Bourke Byrne</h2>
          <p className="title">Co-Founder</p>
          <p>Greetings, I'm Lorraine, one of the Co-Founders of Lorka Makeup and Beauty Training. With a rich 15-year tenure in the makeup industry, my journey has been adorned with collaborations with esteemed brands like Antipodes, Bare Minerals, and numerous others.<br/><br/>  </p>
          <a href='mailto:lorkamakeupandbeautytraining@gmail.com'>lorkamakeupandbeautytraining@gmail.com</a>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img id='kar' src={kara} alt="Kara" />
        <div className="container">
          <h2>Kara Byrne</h2>
          <p className="title">Co-Founder</p>
          <p>Hi Kara here. I am one of the Co-Founders here at Lorka Makeup and Beauty Training. I have been working in the beauty industry for many years with experience across all sectors.I am a skilled in all things Makeup , Brows , Waxing and more.* more Text* <br/><br/><br/></p>
          <a href='mailto:lorkamakeupandbeautytraining@gmail.com'>lorkamakeupandbeautytraining@gmail.com</a>
        </div>
      </div>
    </div>
    
    <div className="column">
      <div className="card">
        <img id='justina'  src={justina} alt="John"/>
        <div className="container">
          <h2>Justina  Zil</h2>
          <p className="title">Owner Of Justina Lashes</p>
          <p>Grettings Justina here. I am the proud owner of Justina Lashes. I currently share the space with Lorka Makeup and Beauty Training.I work on clients lashes using my own lash products.If you would like to book in with me please visit me at <a href='https://www.instagram.com/justinalashes_/'>justinalashes_</a> on instagram or text the number below</p>
          <a href='tel:087 964 8177'>087 964 8177</a>
        </div>
      </div>
    </div>
  </div>
</div>
      

  <div  id='Offer'>
        <div id='offertxtcontainer'>
            <h3>What We offer</h3>
            <p><b> Welcome to Lorka, where we take beauty to new heights with our extensive range of premium services. Immerse yourself in a world of glamour and transformation as we offer an array of offerings, including personalized makeup appointments, comprehensive training sessions, enlightening theory courses, and much more.

At Lorka, we are committed to setting the gold standard in our industry. Our dedicated staff takes immense pride in delivering services of the highest quality, ensuring that each client experiences the epitome of beauty and expertise.
<br></br>Elevate your beauty experience with Lorka – where excellence meets elegance.</b></p>
            <a id='bookbtn'>Book Now</a>
        </div>
        <div id='offerImgContainter'>
        </div>

      </div>


    </div>
  );
};

export default Home;
