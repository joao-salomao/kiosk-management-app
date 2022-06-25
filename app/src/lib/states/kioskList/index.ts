import { atom, selector } from "recoil";
import { Kiosk } from "lib/types";
import { kioskStatusFilterState } from "lib/states/kioskStatusFilter";
import { kioskSearchFilterState } from "lib/states/kioskSearchFilter";
import { applyStatusFilter } from "lib/utils/applyStatusFilter";
import { applySearchFilter } from "lib/utils/applySearchFilter";

export const kioskListState = atom<Kiosk[]>({
  key: "kioskList",
  default: [],
});

export const filteredKioskListState = selector({
  key: "filteredKioskList",
  get: ({ get }) => {
    const statusFilter = get(kioskStatusFilterState);
    const search = get(kioskSearchFilterState);
    const list = get(kioskListState);

    const filteredList = applyStatusFilter(list, statusFilter);
    return applySearchFilter(
      filteredList,
      ["id", "description", "serialKey"],
      search
    );
  },
});
