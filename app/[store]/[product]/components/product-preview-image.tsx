'use client';

import { LongArrowLeft } from '@/components/icons/long-arrow-left';
import { LongArrowRight } from '@/components/icons/long-arrow-right';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ArrowControlProps {
  children: React.ReactNode;
  onClick: () => void;
  position: 'left' | 'right';
}

const IMAGES = [
  'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=3085&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1529262365544-55d1707e64e6?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1683315446874-e6a629087ef8?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1502191757151-c1c29782f6d0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

export default function ProductPreviewImage() {
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [selectedImage, setSelectedImage] = useState<string>(IMAGES[imgIndex]);

  const onArrowControl = (position: 'left' | 'right') => {
    if (position === 'left') {
      setImgIndex(imgIndex === 0 ? 4 : imgIndex - 1);
    } else {
      setImgIndex(imgIndex === 4 ? 0 : imgIndex + 1);
    }
  };

  useEffect(() => {
    setSelectedImage(IMAGES[imgIndex]);
  }, [imgIndex]);

  return (
    <div className="flex h-auto w-full flex-col gap-y-3">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-red-50">
        <Image
          src={selectedImage}
          alt={`product-detail-${imgIndex}`}
          title={`product-detail-${imgIndex}`}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
          className="size-full object-cover object-center"
          priority
        />

        <ArrowControl onClick={() => onArrowControl('left')} position="left">
          <LongArrowLeft />
        </ArrowControl>

        <ArrowControl onClick={() => onArrowControl('right')} position="right">
          <LongArrowRight />
        </ArrowControl>
      </div>

      <div className="flex flex-row gap-x-3">
        {IMAGES.map((image, key) => {
          return (
            <div
              key={key}
              className={cn(
                'relative aspect-square w-24 cursor-pointer overflow-hidden rounded-md',
                image == selectedImage && 'border-2 border-orange-400',
              )}
              onClick={() => {
                setImgIndex(key);
              }}
            >
              <Image
                src={image}
                alt={`product-detail-${key}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 33vw"
                className="size-full object-cover object-center"
                priority
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ArrowControl = ({ children, onClick, position }: ArrowControlProps) => {
  const positionClass = position === 'left' ? 'left-3' : 'right-3';

  return (
    <Button
      variant="ghost"
      className={cn(
        'absolute top-1/2 flex size-14 -translate-y-1/2 items-center justify-center',
        'rounded-full bg-white/50 backdrop-blur-md hover:bg-white/50',
        positionClass,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
