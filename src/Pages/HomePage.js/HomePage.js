import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/Navbar";
import "./HomePage.css";
import starSVG from "../assets/STAR.svg"; // Import SVG file
import lorraine from "../assets/Lorraine_carosel_pic.png";
import kara from "../assets/Kara_carousel_pic.png";
import justina from "../assets/Justina_carousel_pic.png";
import experience from "../assets/experience.png";
import small from "../assets/small.png";
import unique from "../assets/unique.png";
import industry from "../assets/industry.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import x from "../assets/x.png";
import Brands from '../assets/Brands.png'
const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <NavBar />

      <div id="OpenMsg" className="background-container">
        <div className="content">
          <h1>
            <b>Beauty Training With Proven Results</b>
          </h1>
          <p id="innov">
            <b>
              Innovative training in Brand Eduction, Makeup and Beauty
              Treatments{" "}
            </b>
          </p>
          <a id="learn" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div id="whytrain">
        <div id="desc">
          <h1>Why train with Lorka</h1>
          <p>
            Starting out in the industry or upskilling we have you covered. At
            lorka we'll help you <br />
            boost your competative edge so you can secure your future
          </p>
        </div>

        <div id="reasons" className="gridContainer">
          <div>
            <div className="grid-item">
              <div className="imgContainer">
                <img src={experience}></img>
              </div>

              <div className="textContainer">
                <h5 className="head">Experienced Professionals</h5>
                <p className="desc">
                  The staff at Lorka are all trained professionals who excel in
                  their field. Many of our educators also have s training in
                  many areas of the Beauty Industry.
                </p>
              </div>
            </div>

            <div className="grid-item">
              <div className="imgContainer">
                <img src={unique}></img>
              </div>

              <div className="textContainer">
                <h5 className="head">Unique Approach</h5>
                <p className="desc">
                  The Lorka teaching method is based on an innovative and
                  result-oriented technique that helps students overcome
                  barriers to bring concrete results.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="grid-item">
              <div className="imgContainer">
                <img src={small}></img>
              </div>

              <div className="textContainer">
                <h5 className="head">Private or Small Groups</h5>
                <p className="desc">
                  Some people learn best on their own; others prefer learning in
                  groups. At Lorka , you can choose the environment that works
                  best for you.{" "}
                </p>
              </div>
            </div>

            <div className="grid-item">
              <div className="imgContainer">
                <img src={industry}></img>
              </div>

              <div className="textContainer">
                <h5 className="head">Industry Focused Courses</h5>
                <p className="desc">
                  Every course is industry focused for optimal effectiveness. We
                  work with only innovative and proven Brands as our partners
                  and ares brand educators for these brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="About">
        <div id="abImgContainter"></div>
        <div id="abtxtcontainer">
          <h3>
            <b>About Us</b>
          </h3>
          <p>
            {" "}
            Lorka is a training academy that provides top notch training in a
            variety of subjects. We offer both private and small group sessions,
            so you can choose exactly the training style you like best. Our
            training academy is distinguished by the high level of service and
            support we provide to our students, deep knowledge of our Industry
            and the brands and Accreditations we offer , a unique Brand
            educators service for cosmetic, skin care and beauty treatment Start
            ups and Already established Brands and most importantly, the high
            caliber of our tutors who are experts in Their fields.
          </p>
          <a href="tel:089 600 9228" id="callbtn">Call Us</a>
        </div>
      </div>

     
      <div id="ourteam" className="ourteam">
      <svg
  id="squiggle"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
  style={{
    animation: 'wave 2s infinite alternate',
    transform: `translateY(${Math.abs(Math.sin(scrollPosition / 50)) * 10}px)`,
  }}
>
  <path fill="none" stroke="#2e8b57" strokeWidth="1" d="M0 50 Q25 20 50 50 T100 50"/>
</svg>

        <p className="ourteamheader">
          <span id="meet">Meet The</span>
          <span id="team"> Team!</span>
        </p>

        <div className="row" id="fadeRow">
          <div className="column">
            <div className="card">
              <img id="lor" src={lorraine} alt="Lorraine" />
              <div className="container">
                <h2>Lorraine Bourke Byrne</h2>
                <p className="title">Co-Founder</p>
                <p>
                  Greetings, I'm Lorraine, one of the Co-Founders of Lorka
                  Makeup and Beauty Training. With a rich 15-year tenure in the
                  makeup industry, my journey has been adorned with
                  collaborations with esteemed brands like Antipodes, Bare
                  Minerals, and numerous others.
                  <br />
                  <br />{" "}
                </p>
                <a href="mailto:lorkamakeupandbeautytraining@gmail.com">
                  lorkamakeupandbeautytraining@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img id="kar" src={kara} alt="Kara" />
              <div className="container">
                <h2>Kara Byrne</h2>
                <p className="title">Co-Founder</p>
                <p>
                  Hi Kara here. I am one of the Co-Founders here at Lorka Makeup
                  and Beauty Training. I have been working in the beauty
                  industry for many years with experience across all sectors.I
                  am a skilled in all things Makeup , Brows , Waxing and more.*
                  more Text* <br />
                  <br />
                  <br />
                </p>
                <a href="mailto:lorkamakeupandbeautytraining@gmail.com">
                  lorkamakeupandbeautytraining@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img id="justina" src={justina} alt="John" />
              <div className="container">
                <h2>Justina Zil</h2>
                <p className="title">Owner Of Justina Lashes</p>
                <p>
                  Grettings Justina here. I am the proud owner of Justina
                  Lashes. I currently share the space with Lorka Makeup and
                  Beauty Training.I work on clients lashes using my own lash
                  products.If you would like to book in with me please visit me
                  at{" "}
                  <a href="https://www.instagram.com/justinalashes_/">
                    justinalashes_
                  </a>{" "}
                  on instagram or text the number below
                </p>
                <a href="tel:087 964 8177">087 964 8177</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 id="whatweoffer">Price List</h1>

      <div id="Offer">
        <div id="headering"></div>
        <div id="offerImgContainter">
          <div class="category">
            <h3>Makeup</h3>
            <ul>
              <li>Basic Makeup: 45 mins - €40</li>
              <li>Makeup with Strip Lashes: 1 hour - €45</li>
              <li>Makeup with Individual Lashes: 1 hour - €45 </li>
              <li>Bridal Makeup: From €200 </li>
              <li>Occasional Makeup: 1.5 hours - €60 </li>
              <li>1-2-1 Lesson: 1 hour - €60</li>
              <li>Strip/Individual Lash Application: 15 mins - €10</li>
            </ul>
          </div>

          <div class="category">
            <h3>Brow</h3>
            <ul>
              <li>Tint: 15 mins - €10</li>
              <li>Wax: 20 mins - €18</li>
              <li>Hybrid Brow Wax and Tint: 40 mins - €28</li>
              <li>Lamination: 30 mins - €40</li>
            </ul>
          </div>

          <div class="category">
            <h3>Lash</h3>
            <ul>
              <li>Lash Lift: 30 mins - €40</li>
              <li>Lamination and Lash Lift Combo: 45 mins - €70</li>
              <li>Lash Tint: 20 mins - €15</li>
            </ul>
          </div>

          <div class="category">
            <h3>Waxing</h3>
            <ul>
              <li>Lip Wax: 15 mins - €15</li>
              <li>Chin Wax: 15 mins - €15</li>
              <li>Sides of the Face: 15 mins - €15</li>
              <li>Facial Waxing Combo: 35 mins - €35</li>
            </ul>
          </div>

          <div class="category">
            <h3>Courses</h3>
            <ul>
              <li>Hybrid Wax and Tint Course Accredited: 4 hours - €495</li>
              <li>Brow Lamination Accredited: 3 hours - €300</li>
              <li>Lash Lift Course Accredited: 3 hours - €300</li>
            </ul>
          </div>
        </div>
      </div>

    
      <div id="Brands">
      <p className="ourteamheader"><span id="team">Our</span> <span >Brands!</span></p>
        <img src={Brands}></img>
      </div>

      <div>
        <a href="https://www.fresha.com/a/lorka-makeup-and-beauty-training-academy-rathcoole-eaton-house-main-street-kqcrwbq4"><p className="ourteamheader"><span >Book</span> <span id="team">Now!</span></p></a>
        <div id='Book' className="Bookings">
        
        </div>

      </div>

      <div id="Contact">
        <div id="CompanyInfo">
          <h3>
            <a href="tel:089 600 9228"> Phone : 089 600 9228</a>
          </h3>
          <h3>
            <a href="mailto:lorkamakeupandbeautytraining@gmail.com">
              {" "}
              Email : lorkamakeupandbeautytraining@gmail.com
            </a>
          </h3>
          <h3>
            <a href="https://www.google.com/maps/search/Unit+3b,+Eaton+House,+Main+St,+Rathcoole,+Co.+Dublin,+D24+Y967/@53.2809694,-6.4733454,17z/data=!3m1!4b1?entry=ttu">
              {" "}
              Location : Unit 3b, Eaton House, Main St, Rathcoole, Co. Dublin, D24 Y967
            </a>
          </h3>

          <div id="socials">
            <div>
              <a href="https://www.facebook.com/Lorkabeautytraining">
                <img src={facebook} />
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/lorkamakeupbeauty/">
                <img src={instagram} />
              </a>
            </div>
            <div>
              <a>
                <img src={x} />
              </a>
            </div>
          </div>
        </div>

        <div id="OpeningHours">
          <h2>Opening Hours: </h2>
          <p>
            Monday + Sunday - Closed
            <br />
            <br /> Tuesday 9 a.m.–4 p.m.
            <br />
            <br />
            Wednesday 9 a.m.–4 p.m.
            <br />
            <br />
            Thursday 9 a.m.–4 p.m.
            <br />
            <br />
            Friday 9 a.m.–7 p.m.
            <br />
            <br /> Saturday 9 a.m.–5 p.m.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
