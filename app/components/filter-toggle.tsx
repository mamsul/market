'use client';

import React from 'react';
import { layoutStore } from '@/store/layout-store';
import { FunnelIcon } from '@/components/icons/funnel-icon';
import { Button } from '@/components/ui/button';
import { useStore } from 'zustand';

export default function FilterToggle() {
  const { showFilter, setShowFilter } = useStore(layoutStore, (state) => state);

  const handleFilterVisibility = () => setShowFilter(!showFilter);

  return (
    <Button variant="outline" size="sm" className="px-2" onClick={handleFilterVisibility}>
      <FunnelIcon className="size-4" />
      {/* <span>{showFilter ? 'Tutup' : 'Buka'} Filter</span> */}
    </Button>
  );
}
