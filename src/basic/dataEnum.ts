type ID = string | number;
export enum categoriesType {
  SILVER,
  GOLD = 150000,
  PLATINUM = 1000000,
}

export type Customer = {
  id: ID;
  name: string;
  type: categoriesType;
  address?: string;
};
