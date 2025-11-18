export interface HashID {
  id: string;
}
export interface HashName {
  id: string;
}

export type Domain = HashID & HashName;
