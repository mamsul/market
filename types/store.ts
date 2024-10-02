import { IProduct } from './product';

export interface IStore {
  storeName: string;
  ownerName: string;
  ownerAvatar: string;
  rating: number;
  address: string;
  phone: string;
  hours: string;
  description: string;
  products: IProduct[];
}
