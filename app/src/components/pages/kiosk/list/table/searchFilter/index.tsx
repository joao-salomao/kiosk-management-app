import { ReactElement } from "react";
import {
  useRecoilState
} from 'recoil';
import { kioskSearchFilterState } from "lib/states/kioskSearchFilter";
import { SearchInput } from "components/searchInput";

export const SearchFilter = (): ReactElement => {
  const [search, setSearch] = useRecoilState(kioskSearchFilterState);

  return (
    <div className="mr-4">
      <SearchInput name="searchFilter" value={search} onChange={setSearch} />
    </div>
  );
}