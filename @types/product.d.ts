type TProductVariant = 'food' | 'drink' | 'all';

interface IProductFilter {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
}

interface IProduct {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  tags: string[];
}
