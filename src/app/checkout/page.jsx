/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
'use client';
import CheckoutProduct from '@/components/CheckoutProduct';
import Header from '@/components/Header';
import formatPrice from '@/helper/CurrencyFormat';
import { selectItems, selectTotal } from '@/redux/slices/basketSlice';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  console.log(items);
  return (
    <div className='bg-gray-100 '>
      <Header />
      <main className='mx-auto max-w-screen-2xl lg:flex'>
        {/* left */}
        <div className='flex-grow m-5 shadow-sm'>
          <Image
            src='https://links.papareact.com/ikj'
            width={1020}
            height={250}
            className='object-contain'
            alt='ikj'
          />
          <div className='flex flex-col p-5 space-y-10 bg-white'>
            <h1 className='pb-4 text-3xl border-b'>
              {items.length === 0
                ? 'Your basket is empty'
                : 'Your Shopping Basket'}
            </h1>

            {/* <CheckoutProduct /> */}
            {items?.map((item, i) => (
              <CheckoutProduct key={i} {...item} />
            ))}
          </div>
        </div>
        {/* right */}
        <div className='flex flex-col w-full p-10 bg-white shadow-sm lg:w-1/3'>
          {items.length > 0 && (
            <>
              <h2 className=' whitespace-nowrap'>
                Subtotal ({items.length}items):{' '}
                <span className='font-bold '>{formatPrice(total)}</span>
              </h2>
              <button
                className={`button w-full mt-2 ${
                  !session &&
                  'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
                }`}
                disabled={!session}
              >
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;
