import { ReactElement } from "react";
import {
  useRecoilState
} from 'recoil';
import { searchFilterState } from "lib/states/searchFilter";

export const SearchFilter = (): ReactElement => {
  const [search, setSearch] = useRecoilState(searchFilterState);

  return (
    <div>
      <label htmlFor="searchFilter">Search</label><br />
      <input
        type="text"
        value={search}
        name="searchFilter"
        placeholder="Ex: Mac"
        className="border border-gray-300 mr-2"
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  );
}