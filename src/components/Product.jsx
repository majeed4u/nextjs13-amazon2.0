/* eslint-disable @next/next/no-img-element */
'use client';
import formatPrice from '@/helper/CurrencyFormat';
import { addToBasket } from '@/redux/slices/basketSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { useDispatch } from 'react-redux';

function Product({ id, title, price, description, category, image, rating }) {
  const dispatch = useDispatch();

  const newRating = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;
    return (
      <span key={i}>
        {rating.rate > number ? (
          <BsStarFill />
        ) : rating.rate > i ? (
          <BsStarHalf />
        ) : null}
      </span>
    );
  });
  const [hasPrime] = useState(Math.random() < 0.5);
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className='relative z-30 flex flex-col p-10 m-5 bg-white'>
      <p className='absolute top-2 right-2'>{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        className='object-contain '
        alt={title}
      />
      <h4 className='my-3 '>{title}</h4>
      <div className='flex items-center '>
        <div className='flex items-center space-x-1 text-yellow-500'>
          {newRating}
        </div>
        <span>({rating.count})</span>
      </div>
      <p className='my-2 text-sm line-clamp-2'>{description}</p>
      <span className='mb-5 '>{formatPrice(price)}</span>
      {hasPrime && (
        <div className='flex items-center -mt-5 space-x-2'>
          <img
            src='https://www.nicepng.com/png/detail/115-1159983_amazon-prime-logo-prime-amazon.png'
            alt='prime'
            className='w-20 '
          />
          <span className='text-sm text-gray-500 '>FREE Next-day Delivery</span>
        </div>
      )}
      <button onClick={addItemToBasket} className='mt-auto button'>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
