export type TProductVariant = 'food' | 'drink' | 'all';

export interface IProductFilter {
  search: string;
  category: string;
  minPrice: number;
  maxPrice: number;
}

export interface IProduct {
  id?: string | number;
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  tags?: string[];
  storeName?: string;
  reviews?: IProductReview[];
}

export interface IProductReview {
  id: number;
  author: string;
  avatar: string;
  rating: number;
  content: string;
  date: string;
}
