export interface HasName {
  name: string;
}

export interface CanSayHello {
  sayHello(name: string): void;
}
