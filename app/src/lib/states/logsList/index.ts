import { atom, selector } from "recoil";
import { Log } from "lib/types";
import { logsSearchFilter } from "lib/states/logsSearchFilter";
import { applySearchFilter } from "lib/utils/applySearchFilter";

export const logsListState = atom<Log[]>({
  key: "logsList",
  default: [],
});

export const filteredLogsListState = selector({
  key: "filteredLogsList",
  get: ({ get }) => {
    const search = get(logsSearchFilter);
    const list = get(logsListState);

    return applySearchFilter(list, ["kioskId", "userId", "action"], search);
  },
});
