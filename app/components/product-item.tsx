'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductItem() {
  return (
    <>
      <Card className="aspect-square w-full cursor-pointer" onClick={() => alert('test')}>
        <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
          <ImagePreview />
        </div>
        <Header />
        <Content />
        <Footer />
      </Card>
    </>
  );
}

const ImagePreview = () => (
  <Image
    src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    fill
    alt="image-produc"
    className="h-full w-full object-cover object-center duration-300 hover:scale-110"
    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
    priority
  />
);

const Header = () => (
  <CardHeader className="px-2 pb-2 md:px-2.5">
    <CardTitle className="line-clamp-2 text-sm md:text-base">
      Cireng Mahal
    </CardTitle>
    <CardDescription className="line-clamp-2 text-xs md:text-sm">
      Sebuah cireng dengan balutan emas.
    </CardDescription>
  </CardHeader>
);

const Content = () => (
  <CardContent className="px-2 text-xs md:px-2.5 md:text-sm">
    <p className="text-lg font-bold">Rp 25.000</p>
  </CardContent>
);

const Footer = () => (
  <CardFooter className="px-2 pb-2.5 md:px-2.5">
    <Button
      variant="default"
      className="w-full"
      onClick={() => alert('BELI SEKARANG')}
    >
      Beli Sekarang
    </Button>
  </CardFooter>
);
