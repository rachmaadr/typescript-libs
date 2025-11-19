type ID = string | number;

export enum UserCategory {
  "SILVER",
  "GOLD" = 150000,
  "PLATINUM" = 1000000,
}
export interface Users {
  nik: ID;
  name: string;
  address?: string;
  category: UserCategory;
  readonly nib: string;
  readonly npwp: string;
}
