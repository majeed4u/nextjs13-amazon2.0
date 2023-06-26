/* eslint-disable @next/next/no-img-element */
'use client';

import { useGetProductsQuery } from '@/redux/api/productApi';
import Product from './Product';

function ProductFeed() {
  const {
    data: products,
    isLoading,
    isFetching,
    isError,
    isSuccess,
  } = useGetProductsQuery();

  return (
    <div className='grid mx-auto grid-flow-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52'>
      {isLoading && isFetching && <div>Loading...</div>}
      {isError && <div>Something went wrong try again</div>}
      {isSuccess &&
        products
          ?.slice(0, 4)
          .map((product) => <Product key={product.id} {...product} />)}
      <img
        src='
      https://links.papareact.com/dyz'
        alt='dyz'
        className=' md:col-span-full'
      />
      <div className=' md:col-span-2'>
        {isSuccess &&
          products
            ?.slice(4, 5)
            .map((product) => <Product key={product.id} {...product} />)}
      </div>
      {isSuccess &&
        products
          ?.slice(5, products.length)
          .map((product) => <Product key={product.id} {...product} />)}
    </div>
  );
}

export default ProductFeed;
