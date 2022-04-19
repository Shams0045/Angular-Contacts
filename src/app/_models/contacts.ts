export interface Contacts {
  id: number;
  addresses: string;
  phones: number;
  name: string;
  emails: string;
}

export interface User {
  user: Array<Contacts>;
}
