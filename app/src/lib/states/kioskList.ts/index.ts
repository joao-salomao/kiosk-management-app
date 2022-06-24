import { atom, selector } from "recoil";
import { Kiosk } from "lib/types";
import { statusFilterState } from "lib/states/statusFilter";
import { searchFilterState } from "lib/states/searchFilter";
import { applyStatusFilter } from "lib/utils/applyStatusFilter";
import { applySearchFilter } from "lib/utils/applySearchFilter";

export const kioskListState = atom<Kiosk[]>({
  key: "kioskList",
  default: [],
});

export const filteredKioskListState = selector({
  key: "filteredKioskList",
  get: ({ get }) => {
    const statusFilter = get(statusFilterState);
    const search = get(searchFilterState);
    const list = get(kioskListState);

    let filteredList = applyStatusFilter(list, statusFilter);
    return applySearchFilter(filteredList, search);
  },
});
