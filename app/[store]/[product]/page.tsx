import React from 'react';

interface StoreProductProps {
  params: {
    product: string;
  };
}

export default function StoreProduct({ params }: StoreProductProps) {
  return (
    <div className="p-4">
      Product Detail
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
