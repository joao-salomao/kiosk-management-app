export type Kiosk = {
  id: string;
  serialKey: string;
  description: string;
  isKioskClosed: boolean;
  storeOpensAt: string;
  storeClosesAt: string;
};

export enum StatusFilter {
  open = "open",
  closed = "closed",
  all = "all",
}
