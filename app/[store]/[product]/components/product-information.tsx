import CommonBreadcrumb from '@/components/common-breadcrumb';
import { CartIcon } from '@/components/icons/cart-icon';
import { LoveIcon } from '@/components/icons/love-icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';

const BREADCRUMB_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Asiong Store', href: '/asiong-store' },
  { name: 'Steak Beruang Laut Lada Hitam Pedas Manis' },
];

export default function ProductInformation() {
  return (
    <div className="flex h-full flex-col justify-between gap-y-5">
      <div className="space-y-5">
        <CommonBreadcrumb key="product-detail-breadcrumb" items={BREADCRUMB_ITEMS} />

        <h2 className="text-4xl font-semibold">Steak Beruang Laut Lada Hitam Pedas Manis.</h2>
        <h2 className="text-2xl font-semibold text-orange-500">Rp 342.000,00</h2>

        <div className="pt-5">
          <p className="opacity-70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, incidunt? Dicta
            tempora adipisci consequatur. Rem fugit quibusdam ipsum molestiae harum, porro esse
            iure, ducimus dicta possimus nam quam, accusamus facere!
          </p>

          <div className="mt-5 opacity-70">
            🚧MOHON DIBACA sejenak🚧 <br />
            <br />
            🧟‍♂Takut/pernah kecewa dengan kualitasnya? TIDAK jual produk lokal tiruan dgn istilah
            meltiq seperti Santor* Bluel*bel & Bifut*ki! <br /> <br />
            🌟Krn MUKBANG™ hanya pakai GRADE PREMIUM IMPORT,Cobain saja beda tastenya! <br />
            <br />
            🔥GRILL PERSISI 4MENIT SAJA,MEDIUM WELL LEBIH TERASA TASTENYA! <br />
            <br />
            🍲ORDER SAUCE di https://tokopedia.link/NCcR03Zih7 <br />
            <br />
            🕵🏻Bingung mau beli daging halal & premium dimana? <br />
            <br />
            💯PERCAYAKAN SAJA DENGAN BRAND MUKBANG™ <br />
            <br />
            🥩Jual campuran sausnya jg. Buat apa coba2 daging lain lagi hanya krn selisih sedikit?{' '}
            <br />
            <br />
            🙅🏻‍♂️JANGAN mau TERTIPU banyak yg kasih grade B yg kualitas bawah. <br />
            <br />
            💓KLIK Favourite dulu ya! <br />
            Berat tidak bisa presisi antara 210-230gr. <br />
            <br />
            <br />
            <br />
            PASTIKAN STOCK TERLEBIH DAHULU! <br />
            <br />
            Cocok dgn saos bbq honey/Blackpepper. <br />
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 flex h-max flex-row items-center gap-x-4 bg-white py-5 dark:bg-black">
        <Input type="number" className="h-full w-2/12 bg-white dark:bg-black" defaultValue={1} />
        <Button variant="default" className="w-5/12 xl:p-6">
          <CartIcon className="mr-3" />
          Masukkan Keranjang
        </Button>
        <Button variant="outline" className="w-5/12 xl:p-6">
          <LoveIcon className="mr-3" />
          Favorit
        </Button>
      </div>
    </div>
  );
}
