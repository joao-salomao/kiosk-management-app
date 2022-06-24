import { atom } from "recoil";
import { StatusFilterEnum } from "lib/types";

export const statusFilterState = atom({
  key: "statusFilter",
  default: StatusFilterEnum.all,
});
