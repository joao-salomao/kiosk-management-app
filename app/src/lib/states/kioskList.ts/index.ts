import { atom, selector } from "recoil";
import { Kiosk, StatusFilterEnum } from "lib/types";
import { statusFilterState } from "lib/states/statusFilter";
import { searchFilterState } from "lib/states/searchFilter";

export const kioskListState = atom<Kiosk[]>({
  key: "kioskList",
  default: [],
});

export const filteredKioskListState = selector({
  key: "filteredKioskList",
  get: ({ get }) => {
    const statusFilter = get(statusFilterState);
    const search = get(searchFilterState);

    let list = get(kioskListState);

    if (statusFilter === StatusFilterEnum.closed) {
      list = list.filter((k) => k.isKioskClosed === true);
    } else if (statusFilter === StatusFilterEnum.open) {
      list = list.filter((k) => k.isKioskClosed === false);
    }

    if (search.length > 0) {
      list = list.filter(
        (k) =>
          k.id.includes(search) ||
          k.description.includes(search) ||
          k.serialKey.includes(search)
      );
    }

    return list;
  },
});
