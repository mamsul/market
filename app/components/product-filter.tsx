'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { useDebounce } from '@/lib/hooks';
import { IProductFilter } from '@/types';
import React, { useCallback, useEffect, useState } from 'react';

interface IProductFilterProps {
  filter: IProductFilter;
  setFilter: (value: IProductFilter) => void;
}

export default function ProductFilter({ setFilter, filter }: IProductFilterProps) {
  const [minPrice] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(200000);
  const [search, setSearch] = useState<string>('');
  const debouncedSearch = useDebounce(search, 500);

  const handleChangeFilter = useCallback(
    (name: keyof IProductFilter, value: string | number) => {
      setFilter({
        ...filter,
        [name]: value,
      });
    },
    [filter, setFilter],
  );

  useEffect(() => {
    if (debouncedSearch) {
      handleChangeFilter('search', debouncedSearch);
    }
  }, [debouncedSearch, handleChangeFilter]);

  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-4 text-lg font-semibold tracking-tight">Filter</h2>
        <div className="space-y-5">
          <Input
            placeholder="Cari barang"
            value={search}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
          />

          <Separator />

          <div className="space-y-4">
            <h3>Harga</h3>

            <div className="pl-2">
              <Slider
                value={[maxPrice]}
                min={1000}
                max={500000}
                step={1000}
                onValueChange={(val: number[]) => setMaxPrice(val[0])}
              />
              <div className="mt-2 flex justify-between text-sm">
                <span>Rp {minPrice}</span>
                <span>Rp {maxPrice}</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3>Kategori</h3>

            <RadioGroup defaultValue="all" className="pl-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Semua</Label>
              </div>
              <div className="mt-1 flex items-center space-x-2">
                <RadioGroupItem value="food" id="food" />
                <Label htmlFor="food">Makanan</Label>
              </div>
              <div className="mt-1 flex items-center space-x-2">
                <RadioGroupItem value="drink" id="drink" />
                <Label htmlFor="drink">Minuman</Label>
              </div>
              <div className="mt-1 flex items-center space-x-2">
                <RadioGroupItem value="snacks" id="snacks" />
                <Label htmlFor="snacks">Cemilan</Label>
              </div>
              <div className="mt-1 flex items-center space-x-2">
                <RadioGroupItem value="accesories" id="accesories" />
                <Label htmlFor="accesories">Aksesoris</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
