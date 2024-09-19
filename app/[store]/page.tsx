import CommonBreadcrumb from '@/components/common-breadcrumb';
import Container from '@/components/container';
import { HomeModernIcon } from '@/components/icons/home-modern-icon';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import ProductList from '../components/product-list';

interface StoreProps {
  params: {
    product: string;
  };
}

const BREADCRUMB_ITEMS = [{ name: 'Home', href: '/' }, { name: 'Asiong Store' }];

export default function Store({ params }: StoreProps) {
  return (
    <Container className="flex flex-col gap-y-5 py-10">
      <CommonBreadcrumb key="store-breadcrumb" items={BREADCRUMB_ITEMS} />

      <div className="flex items-start gap-x-3 pt-5">
        <HomeModernIcon className="size-10 text-gray-500" />
        <div className="flex flex-col gap-y-1">
          <h2 className="text-4xl font-semibold">Asiong Store</h2>
          <p className="opacity-70">
            Warung asiong berdiri sejak <span className="text-orange-500">1945</span>
          </p>
        </div>
      </div>
      <Separator />

      <ProductList limit={7} />
    </Container>
  );
}
