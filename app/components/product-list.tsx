import React from 'react';
import ProductItem from './product-item';
import { cn } from '@/lib/utils';
import { fetcher } from '@/lib/fetchers';

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {}

async function getProducts() {
  const res = await fetcher('/products');
  return res?.products ?? [];
}

export default async function ProductList({ className }: ProductListProps) {
  const products = await getProducts();

  return (
    <div
      className={cn(
        'grid grid-cols-2 gap-x-2 gap-y-3',
        'sm:gap-5',
        'md:grid-cols-3',
        'lg:grid-cols-4',
        className,
      )}
    >
      {products?.map((product: IProduct, idx: number) => (
        <ProductItem key={`product-item-${idx}`} product={product} />
      ))}
    </div>
  );
}
