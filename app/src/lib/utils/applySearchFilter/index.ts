export const applySearchFilter = (
  list: any[],
  keys: string[],
  search: string
): any[] => {
  const parsedSearch = search.trim().toLowerCase();

  if (parsedSearch.length === 0) return list;

  if (keys.length === 0) return list;

  return list.filter((item) =>
    keys.some((key) => {
      if (!item[key]) return true;
      return item[key].toString().toLowerCase().includes(parsedSearch);
    })
  );
};
