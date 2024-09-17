'use client';

import Portal from '@/components/portal';
import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

interface IProductDetailProps {
  onHide: () => void;
  show: boolean;
}

export default function ProductDetail({ onHide }: IProductDetailProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 20);
  }, []);

  return (
    <Portal>
      <BackDrop onHide={onHide} />

      <div
        className={cn(
          'fixed inset-y-0 z-[9999] w-[50vw] bg-white shadow-xl dark:bg-black',
          'transition-all duration-300',
          isOpen ? 'right-0 delay-75' : '-right-[50vw]',
        )}
      >
        <div className="h-full w-full p-8 text-black dark:text-white">
          <h3>Yo</h3>
        </div>
      </div>
    </Portal>
  );
}

const BackDrop = ({ onHide }: { onHide: () => void }) => (
  <div className="fixed inset-0 z-[9998] bg-black/50" onClick={onHide} />
);
