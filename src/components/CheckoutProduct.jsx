/* eslint-disable @next/next/no-img-element */
'use client';
import formatPrice from '@/helper/CurrencyFormat';
import { addToBasket, removeFromBasket } from '@/redux/slices/basketSlice';
import Image from 'next/image';
import React, { useState } from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) {
  const [hasPrime] = useState(Math.random() < 0.5);
  const { rate, count } = rating;
  const newRating = Array.from({ length: 5 }, (_, i) => {
    const number = i + 0.5;
    return (
      <span key={i}>
        {rate > number ? <BsStarFill /> : rate > i ? <BsStarHalf /> : null}
      </span>
    );
  });
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = { id, title, price, description, category, image, rating };
    dispatch(addToBasket(product));
  };
  const removeITemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className='grid grid-cols-5 '>
      <Image
        src={image}
        width={200}
        height={200}
        className='object-contain '
        alt={title}
      />
      {/* middle */}
      <div className='col-span-3 mx-5 '>
        <p>{title}</p>
        <div className='flex items-center space-x-1 '>
          <span className='flex items-center space-x-[1px] text-yellow-500'>
            {newRating}
          </span>
          <span>({count})</span>
        </div>
        <p className='my-2 text-xs line-clamp-3'>{description}</p>
        <span>{formatPrice(price)}</span>
        {hasPrime && (
          <div className='flex items-center space-x-2'>
            <img src='/images/prime.png' alt='prime' className='w-12 ' />
            <span className='text-xs text-gray-500 '>
              FREE Next-day Delivery
            </span>
          </div>
        )}
      </div>
      {/* right add/remove */}
      <div className='flex flex-col my-auto space-y-2 justify-self-end'>
        <button onClick={addItemToBasket} className='mt-auto button'>
          Add to Basket
        </button>
        <button onClick={removeITemFromBasket} className='button'>
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
