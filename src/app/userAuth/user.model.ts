export interface IAddress {
  street: string;
  city: string;
  zip: number;
}
export interface IUser {
  username: string;
  email: string;
  password: string;
  address: IAddress[];
}
