import React from 'react';
import ProductItem from './product-item';
import { cn } from '@/lib/utils';
// import { fetcher } from '@/lib/fetchers';

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {}

// async function getProducts() {
//   const res = await fetcher('/products');
//   console.log({ res });
// }

export default async function ProductList({ className }: ProductListProps) {
  // await getProducts();

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-2 gap-y-3',
        'sm:gap-5',
        'md:grid-cols-3',
        'lg:grid-cols-4',
        'xl:grid-cols-5',
        className,
      )}
    >
      {Array(6)
        .fill(null)
        .map((item, idx) => (
          <ProductItem key={`product-item-${idx}`} />
        ))}
    </div>
  );
}
