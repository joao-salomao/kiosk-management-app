import { Kiosk } from "lib/types";
import { ReactElement } from "react";
import { formatTime } from "lib/utils/formatTime";

export type TableProps = {
  kiosks: Kiosk[];
  isLoading: boolean;
  onClickNew: () => void
  onClickEdit: (id: Kiosk['id']) => void
  onClickDelete: (kioskId: Kiosk['id']) => void
};

export const Table = ({ kiosks, isLoading, onClickNew, onClickEdit, onClickDelete }: TableProps): ReactElement => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg p-2">
      <button className="float-right bg-gray-500 mb-2 rounded p-1 text-white text-center" onClick={onClickNew}>New Kiosk</button>
      <table className="w-full text-sm text-left text-gray-500 text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-50 bg-gray-700 text-gray-400">
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
            <th scope="col" className="px-6 py-3">
              Is Closed?
            </th>
            <th scope="col" className="px-6 py-3">
              Opens at
            </th>
            <th scope="col" className="px-6 py-3">
              Closes at
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="bg-white border-b bg-gray-800 border-gray-700">
              <th colSpan={7} scope="row" className="px-6 py-4 text-center">
                Carregando
              </th>
            </tr>
          )}
          {!isLoading &&
            kiosks.map((item) => (
              <tr
                key={item.id}
                className="bg-white border-b bg-gray-800 border-gray-700"
              >
                <th scope="row" className="px-6 py-4">
                  {item.id}
                </th>
                <td className="px-6 py-4">{item.serialKey}</td>
                <td className="px-6 py-4">{item.description}</td>
                <td className="px-6 py-4">{item.isKioskClosed ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4">{formatTime(item.storeOpensAt)}</td>
                <td className="px-6 py-4">{formatTime(item.storeClosesAt)}</td>
                <td className="px-6 py-4">
                  <button className="bg-white rounded p-1 mr-2" onClick={() => onClickEdit(item.id)}>Edit</button>
                  <button className="bg-white rounded p-1" onClick={() => onClickDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
