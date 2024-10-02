'use client';

import { IProductReview } from '@/types';
import { StarIcon } from '@radix-ui/react-icons';
import React from 'react';

interface StoreProductProps {
  reviews: IProductReview[];
}

export default function ProductRating({ reviews }: StoreProductProps) {
  const averageRating =
    reviews && reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i < Math.round(averageRating as number) ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({reviews?.length ?? 0} reviews)</span>
    </div>
  );
}
