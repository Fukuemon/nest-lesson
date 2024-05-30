import { ItemStatus } from './item-status.enum';

export type Item = {
  id: string;
  name: string;
  description: string;
  price: number;
  status: ItemStatus;
};
