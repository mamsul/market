'use client';

import AdjustHorizontalIcon from '@/components/icons/adjust-horizontal-icon';
import XMarkIcon from '@/components/icons/x-mark-icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { sortListData } from '@/lib/constants';
import React, { useState } from 'react';

export default function SortToggle() {
  const [selectedSort, setSelectedSort] = useState<string>('');

  return (
    <div className="flex items-center space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="items-center border-dashed">
            <AdjustHorizontalIcon className="mr-2 size-5" />
            Urutkan{' '}
            {selectedSort && (
              <>
                <Separator orientation="vertical" className="mx-4" />
                {selectedSort}
              </>
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start" className="w-max">
          {sortListData.map(({ name, value }) => (
            <DropdownMenuItem key={value} onClick={() => setSelectedSort(name)}>
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {selectedSort && (
        <Button variant="ghost" className="px-2" size="sm" onClick={() => setSelectedSort('')}>
          <XMarkIcon className="size-4" />
        </Button>
      )}
    </div>
  );
}
