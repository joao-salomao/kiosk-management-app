export type Kiosk = {
  id: string;
  serialKey: string;
  description: string;
  isKioskClosed: boolean;
  storeOpensAt: string;
  storeClosesAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Log = {
  id: string;
  action: string;
  description: string;
  kiosk: Kiosk;
  user: User;
};

export enum StatusFilterEnum {
  open = "open",
  closed = "closed",
  all = "all",
}
