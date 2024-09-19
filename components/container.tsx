import { cn } from '@/lib/utils';
import React from 'react';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('container mx-auto 2xl:px-32', className)}>{children}</div>;
}
