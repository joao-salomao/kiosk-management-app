import { ReactElement } from "react";
import {
  useRecoilState
} from 'recoil';
import { logsSearchFilter } from "lib/states/logsSearchFilter";
import { SearchInput } from "components/searchInput";

export const SearchFilter = (): ReactElement => {
  const [search, setSearch] = useRecoilState(logsSearchFilter);

  return (
    <div className="mr-4">
      <SearchInput name="searchFilter" value={search} onChange={setSearch} />
    </div>
  );
}