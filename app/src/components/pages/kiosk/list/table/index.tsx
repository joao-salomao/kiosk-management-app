import { Kiosk } from "lib/types";
import { ReactElement } from "react";

export type TableProps = {
  kiosks: Kiosk[];
  isLoading: boolean;
};

export const Table = ({ kiosks, isLoading }: TableProps): ReactElement => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 text-gray-400">
        <thead className="text-xs text-white uppercase bg-gray-50 bg-gray-700 text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr className="bg-white border-b bg-gray-800 border-gray-700">
              <th colSpan={2} scope="row" className="px-6 py-4 text-center">
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
                <td className="px-6 py-4">{item.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
