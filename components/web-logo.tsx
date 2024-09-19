'use client';

import React from 'react';
import { Button } from './ui/button';
import StoreIcon from './icons/store-icon';
import { useRouter } from 'next/navigation';

export default function WebLogo() {
  const router = useRouter();

  return (
    <Button
      variant="link"
      className="flex items-center space-x-2 p-0 !no-underline"
      onClick={() => router.push('/')}
    >
      <StoreIcon className="size-5" />
      <h1 className="font-bold">Pasar Knitto.</h1>
    </Button>
  );
}
