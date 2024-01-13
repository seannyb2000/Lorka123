import React, { useState } from 'react';
import './Carosel.css';
import './flickity.pkgd';
import jQuery from 'jquery';
const Carosel = () => {
  

  return (
<div class="gallery js-flickity"
  data-flickity-options='{ "wrapAround": true }'>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
  <div class="gallery-cell"></div>
</div>

  );
};

export default Carosel;
