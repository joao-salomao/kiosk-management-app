import { ReactElement } from "react";
import {
  useRecoilState
} from 'recoil';
import { kioskStatusFilterState } from "lib/states/kioskStatusFilter";
import { StatusFilterEnum } from "lib/types";


export const StatusFilter = (): ReactElement => {
  const [value, setFilter] = useRecoilState(kioskStatusFilterState);

  return (
    <div>
      <label htmlFor="statusFilter">Status filter</label><br />
      <select
        value={value}
        name="statusFilter"
        className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        onChange={event => setFilter(event.target.value as StatusFilterEnum)}
      >
        <option value={StatusFilterEnum.all}>All Kiosks</option>
        <option value={StatusFilterEnum.open}>Opened Kiosks</option>
        <option value={StatusFilterEnum.closed}>Closed Kiosks</option>
      </select>
    </div>
  );
}