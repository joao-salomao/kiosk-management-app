import { atom } from "recoil";
import { StatusFilterEnum } from "lib/types";

export const kioskStatusFilterState = atom({
  key: "kioskStatusFilter",
  default: StatusFilterEnum.all,
});
