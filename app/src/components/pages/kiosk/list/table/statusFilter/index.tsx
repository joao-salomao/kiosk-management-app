import { ReactElement } from "react";
import {
  useRecoilState
} from 'recoil';
import { statusFilterState } from "lib/states/statusFilter";
import { StatusFilterEnum } from "lib/types";


export const StatusFilter = (): ReactElement => {
  const [value, setFilter] = useRecoilState(statusFilterState);

  return (
    <div>
      <label htmlFor="statusFilter">Status filter</label><br />
      <select
        value={value}
        name="statusFilter"
        className="border border-gray-300"
        onChange={event => setFilter(event.target.value as StatusFilterEnum)}
      >
        <option value={StatusFilterEnum.all}>All</option>
        <option value={StatusFilterEnum.open}>Opened Kiosks</option>
        <option value={StatusFilterEnum.closed}>Closed Kiosks</option>
      </select>
    </div>
  );
}