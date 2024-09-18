'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductItemProps {
  product: IProduct;
}

interface HeaderProps {
  title: string;
  description: string;
}

interface ContentProps {
  price: number;
}

export default function ProductItem({ product }: ProductItemProps) {
  const router = useRouter();
  const { title, description, price, image } = product ?? {};

  const onDetailProduct = () =>
    router.push(`/asiong-store/${title.toLocaleLowerCase().trim().replace(' ', '-')}`);

  return (
    <>
      <Card
        className="flex aspect-square h-full w-full cursor-pointer flex-col justify-between"
        onClick={onDetailProduct}
      >
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
            <ImagePreview image={image} />
          </div>
          <Header title={title} description={description} />
        </div>
        <Content price={price} />
      </Card>
    </>
  );
}

const ImagePreview = ({ image }: { image: string }) => (
  <Image
    src={image}
    fill
    alt="image-product"
    className="h-full w-full object-contain object-center duration-300 hover:scale-105"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
    priority
  />
);

const Header = ({ title, description }: HeaderProps) => (
  <CardHeader className="px-2 pb-2 md:px-2.5">
    <CardTitle className="line-clamp-2 text-sm text-gray-700 md:text-base">{title ?? ''}</CardTitle>
    <CardDescription className="line-clamp-2 text-xs md:text-sm">
      {description ?? ''}
    </CardDescription>
  </CardHeader>
);

const Content = ({ price }: ContentProps) => (
  <CardContent className="px-2 py-3 text-xs md:px-2.5 md:text-sm">
    <p className="text-lg font-bold">Rp {price}</p>
  </CardContent>
);
