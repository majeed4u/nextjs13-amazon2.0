import Banner from '@/components/Banner';
import Header from '@/components/Header';
import ProductFeed from '@/components/ProductFeed';
import Head from 'next/head';
import Image from 'next/image';

export const metadata = {
  title: 'Amazon 2.0',
};

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Header />
      <main className='mx-auto max-w-screen-2xl'>
        {/* banner */}
        <Banner />
        {/* product feed */}
        <ProductFeed />
      </main>
    </div>
  );
}
