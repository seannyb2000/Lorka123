import React, { useEffect } from 'react';
import $ from 'jquery';
import { Carousel, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Carousels = () => {
 

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.card').length;
  const carousel = document.querySelector('.carousel');

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    const translateValue = -currentIndex * 270; // Adjust the value based on card width + margin
    carousel.style.transform = `translateX(${translateValue}px)`;
  }

  return (
    <Carousel>
      <Carousel.Item>
        <Image src="https://placekitten.com/300/150" alt="Kitten 1" fluid />
        <Carousel.Caption>
          <h3>Card 1</h3>
          <p>Content for card 1.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://placekitten.com/301/150" alt="Kitten 2" fluid />
        <Carousel.Caption>
          <h3>Card 2</h3>
          <p>Content for card 2.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items as needed */}
    </Carousel>
  );
};

export default Carousels;
