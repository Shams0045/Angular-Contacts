export interface Contacts {
  id: number;
  phone: number;
  name: string;
  address: string;
}

export interface User {
  user: Array<Contacts>;
}
