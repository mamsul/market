import Container from '@/components/container';
import { Metadata } from 'next';
import { customMetaDataGenerator, generateSlug } from '@/lib/utils';
import { productData as product } from '@/lib/data';
import { StarIcon } from '@radix-ui/react-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ProductCountControl from './components/product-count-control';
import ProductRating from './components/product-rating';
import ProductPreviewImage from './components/product-preview-image';
import ProductList from '@/app/components/product-list';

interface StoreProductProps {
  params: {
    product: string;
  };
}

export async function generateMetadata({ params }: StoreProductProps): Promise<Metadata> {
  const { product } = params ?? {};

  return customMetaDataGenerator({
    title: generateSlug.unslug(product),
  });
}

export default function ProductDetail() {
  return (
    <Container className="py-10">
      <div className="mb-8 grid gap-8 md:grid-cols-2">
        <ProductPreviewImage />
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold">${product.price.toFixed(2)}</p>
          <ProductRating reviews={product?.reviews || []} />
          <p className="text-gray-600">{product.description}</p>
          <ProductCountControl />
          <p className="text-sm text-gray-600">Category: {product.category}</p>
          <p className="text-sm text-gray-600">Sold by: {product.storeName}</p>
        </div>
      </div>

      <Tabs defaultValue="reviews" className="mb-8">
        <TabsList>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="details">Product Details</TabsTrigger>
        </TabsList>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {product?.reviews?.map((review) => (
                <div key={review.id} className="mb-4 border-b pb-4 last:border-b-0">
                  <div className="mb-2 flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={review.avatar} alt={review.author} />
                      <AvatarFallback>{review.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{review.author}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${i < review.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                  <p className="mt-1 text-sm text-gray-400">{review.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <ul className="mt-4 list-inside list-disc">
                <li>Category: {product.category}</li>
                <li>Sold by: {product.storeName}</li>
                <li>Product ID: {product.id}</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <section>
        <h2 className="mb-4 text-2xl font-bold">You May Also Like</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ProductList limit={3} />
        </div>
      </section>
    </Container>
  );
}
