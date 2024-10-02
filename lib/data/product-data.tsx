import { IProduct } from '@/types';

export const productData: IProduct = {
  id: 1,
  title: 'Organic Apples',
  price: 2.99,
  description:
    'Delicious, crisp organic apples grown in our local orchard. Perfect for snacking, baking, or adding to your favorite recipes. Rich in fiber and vitamins, these apples are a healthy choice for the whole family.',
  category: 'Fruits',
  storeName: 'Green Grocers',
  image: '/placeholder-img.svg?height=400&width=400',
  reviews: [
    {
      id: 1,
      author: 'John Doe',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 5,
      content: 'These apples are amazing! So fresh and crisp. Will definitely buy again.',
      date: '2023-05-15',
    },
    {
      id: 2,
      author: 'Jane Smith',
      avatar: '/placeholder.svg?height=40&width=40',
      rating: 4,
      content: 'Great taste and quality. Just wish they were a bit cheaper.',
      date: '2023-05-10',
    },
  ],
};

export const productRecommendations: IProduct[] = [
  {
    id: 2,
    title: 'Organic Bananas',
    price: 1.99,
    description: 'Fresh organic bananas',
    category: 'Fruits',
    storeName: 'Green Grocers',
    image: '',
    reviews: [],
  },
  {
    id: 3,
    title: 'Organic Oranges',
    price: 3.49,
    description: 'Juicy organic oranges',
    category: 'Fruits',
    storeName: 'Green Grocers',
    image: '',
    reviews: [],
  },
  {
    id: 4,
    title: 'Organic Strawberries',
    price: 4.99,
    description: 'Sweet organic strawberries',
    category: 'Fruits',
    storeName: 'Green Grocers',
    image: '',
    reviews: [],
  },
];
