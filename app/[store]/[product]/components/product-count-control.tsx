'use client';

import { CartIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function ProductCountControl() {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => Math.max(1, q - 1));

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center rounded-md border">
        <Button variant="ghost" size="sm" onClick={decrementQuantity}>
          <MinusIcon className="h-4 w-4" />
        </Button>
        <span className="px-4">{quantity}</span>
        <Button variant="ghost" size="sm" onClick={incrementQuantity}>
          <PlusIcon className="h-4 w-4" />
        </Button>
      </div>
      <Button className="flex-1">
        <CartIcon className="mr-2 h-4 w-4" /> Add to Cart
      </Button>
    </div>
  );
}
