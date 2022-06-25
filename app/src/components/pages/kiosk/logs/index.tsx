import { ReactElement, useState, useCallback } from "react";
import { useMountEffect } from '@react-hookz/web/esm';
import { repository } from "lib/repositories/logs";
import { Log } from "lib/types";
import { DiffChanges } from "./diffChanges";
import { Spinner } from "components/spinner";

export const Logs = (): ReactElement => {
  const [logs, setLogs] = useState<Log[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLogs = useCallback(async () => {
    setIsLoading(true);

    const data = await repository.all();

    setIsLoading(false);
    setLogs(data);
  }, []);

  useMountEffect(() => {
    fetchLogs();
  });


  return (
    <div className="text-gray-500 shadow-lg sm:rounded-lg p-4 min-h-[150px]">
      {
        isLoading && <div className="h-20 w-20 mx-auto">
          <p className="mb-2">Carregando</p>
          <Spinner />
        </div>
      }
      {
        !isLoading && (<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Logs</h5>)
      }
      {
        !isLoading && logs.map(log => (
          <div key={log.id} className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 mb-3">
            <h5 className="mb-2 text-md font-bold tracking-tight">Log #{log.id} - {log.action.toUpperCase()}</h5>
            <div className="font-normal">
              <span className="font-bold">User:</span> {log.user.name}
            </div>
            <DiffChanges log={log} />
          </div>
        ))
      }
    </div>
  )
}