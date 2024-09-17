type TProductVariant = 'food' | 'drink' | 'all';

interface IProductFilter {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
}

interface IProduct {
  image: string;
  name: string;
  price: number;
  variant: ProductVariant;
  description: string;
  rating: number;
  likes: number;
  comments: number;
  category: string;
  tags: string[];
}
