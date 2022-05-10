import { Hotel } from './hotel';

export interface Room {
  id: number;
  description: string;
  image: string;
  price: number;
  people_amount: number;
  deleted: boolean;
  hotel: Hotel;
}
