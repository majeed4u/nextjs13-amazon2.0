/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';

import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

function Header() {
  return (
    <header>
      {/* top header */}
      <div className='flex items-center flex-grow gap-2 px-2 py-2 bg-amazon_blue '>
        <div className='flex items-center flex-grow mt-2 sm:flex-grow-0 '>
          <Image
            src='https://links.papareact.com/f90'
            width={150}
            height={40}
            alt='header'
            className='object-contain cursor-pointer '
          />
        </div>
        {/* search */}
        <div className='items-center flex-grow hidden h-10 gap-1 overflow-hidden bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500 sm:flex'>
          <input
            type='text'
            className='flex-grow flex-shrink w-6 h-full p-2 px-4 focus:outline-none'
          />
          <AiOutlineSearch size={20} className='w-10 ' />
        </div>
        {/* ?right */}
        <div className='flex items-center space-x-6 text-sm text-white whitespace-nowrap '>
          <div className=' link'>
            <p>Hello Majed</p>
            <p className='font-extrabold md:text-sm'>Account & Lists</p>
          </div>
          <div className=' link'>
            <p>Return</p>
            <p className='font-extrabold md:text-sm'>& Orders</p>
          </div>
          <div className='relative flex items-center gap-1 link'>
            <span className='absolute flex items-center justify-center w-5 h-5 font-bold text-black bg-yellow-500 rounded-full -top-2 left-5'>
              4
            </span>
            <AiOutlineShoppingCart size={30} />

            <p className='hidden mt-2 font-extrabold md:text-sm md:inline'>
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom header */}
      <div className='flex items-center p-2 pl-6 space-x-3 text-white bg-amazon_blue-light'>
        <p className='flex items-center gap-1 link'>
          <AiOutlineMenu size={28} />
          ALL
        </p>
        <p className='link'>Prime Video</p>
        <p className='link'>Amazon Business</p>
        <p className='link'>Today's Deals</p>
        <p className='hidden link lg:inline-flex'>Electronics</p>
        <p className='hidden link lg:inline-flex'>Food & Grocery</p>
        <p className='hidden link lg:inline-flex'>Prime</p>
        <p className='hidden link lg:inline-flex'>Buy Again</p>
        <p className='hidden link lg:inline-flex'>Shopper Toolkit</p>
        <p className='hidden link lg:inline-flex'>Health & Personnel Core </p>
      </div>
    </header>
  );
}

export default Header;
