import CommonBreadcrumb from '@/components/common-breadcrumb';
import Container from '@/components/container';
import React from 'react';
import { Metadata } from 'next';
import { customMetaDataGenerator, generateSlug } from '@/lib/utils';
import { ClockIcon, StarIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { MapPinIcon } from '@/components/icons/map-pin-icon';
import ProductList from '../components/product-list';
import { storeData } from '@/lib/data/store-data';

interface StoreProps {
  params: {
    store: string;
  };
}

export async function generateMetadata({ params }: StoreProps): Promise<Metadata> {
  const { store } = params ?? {};

  return customMetaDataGenerator({
    title: generateSlug.unslug(store),
  });
}

const BREADCRUMB_ITEMS = [{ name: 'Home', href: '/' }, { name: 'Asiong Store' }];

export default function Store() {
  const { storeName, ownerAvatar, ownerName, rating, hours, address, phone, description } =
    storeData;

  return (
    <Container className="flex flex-col gap-y-5 py-10">
      <CommonBreadcrumb key="store-breadcrumb" items={BREADCRUMB_ITEMS} />

      <header className="my-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{storeName}</h1>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={ownerAvatar} alt={ownerName} />
              <AvatarFallback>
                {ownerName
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{ownerName}</p>
              <p className="text-sm text-muted-foreground">Store Owner</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Badge variant="secondary" className="text-sm">
            <StarIcon className="mr-1 h-4 w-4" />
            {rating.toFixed(1)}
          </Badge>
          <span className="text-sm text-muted-foreground">
            ({Math.floor(rating * 100)} reviews)
          </span>
        </div>
      </header>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Store Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{description}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                <span>{address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center space-x-2 sm:col-span-2">
                <ClockIcon className="h-5 w-5 text-muted-foreground" />
                <span>{hours}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold">Produk Saya</h2>
        <ProductList limit={3} />
      </section>
    </Container>
  );
}
