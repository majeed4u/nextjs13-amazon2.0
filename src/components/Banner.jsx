/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function Banner() {
  return (
    <div className='relative '>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading='lazy' src='https://links.papareact.com/gi1' alt='gi1' />
        </div>
        <div>
          {' '}
          <img loading='lazy' src='https://links.papareact.com/6ff' alt='6ff' />
        </div>
        <div>
          {' '}
          <img loading='lazy' src='https://links.papareact.com/7ma' alt='7ma' />
        </div>
      </Carousel>
      <div className='absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent md:-mt-52'></div>
    </div>
  );
}

export default Banner;
