import React from 'react';

interface StoreProps {
  params: {
    product: string;
  };
}

export default function Store({ params }: StoreProps) {
  return (
    <div className="p-4">
      Product Detail
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  );
}
