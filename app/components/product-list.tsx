import React from 'react';
import ProductItem from './product-item';
import { cn } from '@/lib/utils';
import { fetcher } from '@/lib/fetchers';
import { IProduct } from '@/types';

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  limit?: number;
}

async function getProducts(limit: number) {
  const res = await fetcher('/products?limit=' + limit);
  return res?.products ?? [];
}

export default async function ProductList({ className, limit = 50 }: ProductListProps) {
  const products = await getProducts(limit);

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
