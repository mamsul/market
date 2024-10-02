import Container from '@/components/container';
import React from 'react';
import ProductPreviewImage from './components/product-preview-image';
import ProductInformation from './components/product-information';
import { Metadata } from 'next';
import { customMetaDataGenerator, generateSlug } from '@/lib/utils';

interface StoreProductProps {
  params: {
    product: string;
  };
}

export async function generateMetadata({ params }: StoreProductProps): Promise<Metadata> {
  const { product } = params ?? {};

  return customMetaDataGenerator({
    title: generateSlug.unslug(product),
  });
}

export default function StoreProduct() {
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
