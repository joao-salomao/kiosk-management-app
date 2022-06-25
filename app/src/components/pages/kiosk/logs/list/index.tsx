import { ReactElement } from "react";
import { Log } from "lib/types";
import { Spinner } from "components/spinner";
import { DiffChanges } from "../diffChanges";
import { SearchFilter } from "../searchFilter";

export type ListProps = {
  isLoading: boolean;
  logs: Log[];
}

export const List = ({ isLoading, logs }: ListProps): ReactElement => {
  return (
    <div className="text-gray-500 shadow-lg sm:rounded-lg p-4 min-h-[150px]">
      {
        isLoading && <div className="h-20 w-20 mx-auto">
          <p className="mb-2">Carregando</p>
          <Spinner />
        </div>
      }
      {
        !isLoading && (
          <>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Logs</h5>
            <div className="mb-2 max-w-[200px]">
              <SearchFilter />
            </div>
          </>
        )
      }
      {
        !isLoading && logs.length === 0 && (
          <div className="px-6 py-4 text-center">
            No results to show, try to change the filters or create a new kiosk.
          </div>
        )
      }
      {
        !isLoading && logs.map(log => (
          <div key={log.id} className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 mb-3">
            <h5 className="text-md font-bold tracking-tight">Log #{log.id}</h5>
            <div>
              <span className="font-bold">Kiosk:</span> #{log.kiosk.id}
            </div>
            <div>
              <span className="font-bold">User:</span> {log.user.name}
            </div>
            <div>
              <span className="font-bold">Action:</span> {log.action}
            </div>
            <DiffChanges log={log} />
          </div >
        ))
      }
    </div >
  )
}