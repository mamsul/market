'use client';

import { cn } from '@/lib/utils';
import { useStore } from 'zustand';
import { layoutStore } from '@/store/layout-store';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import ProductFilter from '../product-filter';
import { useState } from 'react';
import { IProductFilter } from '@/types';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const DEFAULT_FILTER: IProductFilter = {
  search: '',
  category: '',
  minPrice: 1000,
  maxPrice: 200000,
};

export function Sidebar({ className }: SidebarProps) {
  const { showFilter } = useStore(layoutStore, (state) => state);
  const [filterValue, setFilterValue] = useState<IProductFilter>(DEFAULT_FILTER);

  console.log('FILTER: ', filterValue);

  return (
    <div
      className={cn(
        'relative hidden pb-12 transition-all duration-300 lg:block',
        showFilter ? 'opacity-1 w-3/12' : 'w-0 opacity-0',
        className,
      )}
    >
      <ScrollArea className="h-[calc(100vh_-_6.5rem)] w-full">
        <ProductFilter filter={filterValue} setFilter={setFilterValue} />
      </ScrollArea>

      <div className="absolute bottom-0 z-20 h-16 w-full border-t bg-white dark:bg-black">
        <div className="flex h-full w-full items-center justify-center gap-5 px-5">
          <Button variant="link" className="w-3/12 p-0 !no-underline">
            Reset
          </Button>
          <Button variant="default" className="w-9/12">
            Terapkan Filter
          </Button>
        </div>
      </div>
    </div>
  );
}
