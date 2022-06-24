import { Kiosk } from "lib/types";

export const applySearchFilter = (kiosks: Kiosk[], search: string): Kiosk[] => {
  const parsedSearch = search.trim();

  if (parsedSearch.length === 0) return kiosks;

  return kiosks.filter(
    (k) =>
      k.id.includes(parsedSearch) ||
      k.description.includes(parsedSearch) ||
      k.serialKey.includes(parsedSearch)
  );
};
