import Container from '@/components/container';
import React from 'react';
import ProductPreviewImage from './components/product-preview-image';
import ProductInformation from './components/product-information';

interface StoreProductProps {
  params: {
    product: string;
  };
}

export default function StoreProduct({ params }: StoreProductProps) {
  return (
    <Container className="py-10">
      <div className="flex flex-row">
        <div className="w-1/2">
          <ProductPreviewImage />
        </div>

        <div className="h-auto w-1/2 pl-10">
          <ProductInformation />
        </div>
      </div>
    </Container>
  );
}
