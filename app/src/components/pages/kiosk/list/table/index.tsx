import { ReactElement } from "react";
import { Kiosk } from "lib/types";
import { formatTime } from "lib/utils/formatTime";
import { StatusFilter } from "./statusFilter";
import { SearchFilter } from "./searchFilter";
import { Spinner } from "components/spinner";

export type TableProps = {
  kiosks: Kiosk[];
  isLoading: boolean;
  onClickNew: () => void
  onClickEdit: (kioskId: Kiosk['id']) => void
  onClickDelete: (kioskId: Kiosk['id']) => void
  onClickLogs: (kioskId: Kiosk['id']) => void
};

export const Table = (
  {
    kiosks,
    isLoading,
    onClickNew,
    onClickEdit,
    onClickLogs,
    onClickDelete,
  }: TableProps
): ReactElement => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg p-2">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Kiosks</h5>
      <div className="flex mb-2">
        <SearchFilter />
        <StatusFilter />
        <button
          type="button"
          className="ml-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none h-10 mt-auto"
          onClick={onClickNew}
        >
          New Kiosk
        </button>
      </div>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Serial Key
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Is Closed?
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Opens at
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Closes at
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="bg-white border-b">
              <th colSpan={7} scope="row" className="px-6 py-4">
                <div className="h-10 w-10 mx-auto">
                  <Spinner />
                </div>
              </th>
            </tr>
          )}
          {!isLoading &&
            kiosks.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b hover:bg-gray-100"
              >
                <th scope="row" className="px-6 py-4">
                  {`#${item.id}`}
                </th>
                <td className="px-6 py-4">{item.serialKey}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4 text-center">{item.isKioskClosed ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4 text-center">{formatTime(item.storeOpensAt)}</td>
                <td className="px-6 py-4 text-center">{formatTime(item.storeClosesAt)}</td>
                <td className="px-6 py-4 flex justify-center">
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                    onClick={() => onClickLogs(item.id)}
                  >
                    Logs
                  </button>
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 focus:outline-none"
                    onClick={() => onClickEdit(item.id)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    onClick={() => onClickDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
