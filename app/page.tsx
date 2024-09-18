import { Metadata } from 'next';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import FilterToggle from './components/filter-toggle';
import ProductList from './components/product-list';
import { Sidebar } from './components/layouts/sidebar';
import { Button } from '@/components/ui/button';
import SortToggle from './components/sort-toggle';

export const metadata: Metadata = {
  title: 'Pasar Knitto',
  description: '',
};

export default function MusicPage() {
  return (
    <div className="flex flex-row">
      <Sidebar />

      <ScrollArea className="h-[calc(100vh-2.5rem)] w-full">
        <div className="col-span-3 lg:col-span-4 lg:border-l">
          <div className="h-full px-4 py-6 lg:px-8">
            <div className="mb-4 flex flex-col items-start justify-between gap-y-2 sm:flex-row sm:items-center sm:gap-y-0">
              <div className="flex flex-row items-center gap-3">
                <FilterToggle />
                <SortToggle />
              </div>
              <Button size="sm">
                <PlusCircledIcon className="mr-2 size-4" />
                Jual Sesuatu
              </Button>
            </div>

            <ProductList />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
