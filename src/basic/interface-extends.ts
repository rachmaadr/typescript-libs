export interface Employees {
  id: number;
  name: string;
  address?: string;
}

export interface Managers extends Employees {
  numberOfEmployees: number;
  department: string;
}
