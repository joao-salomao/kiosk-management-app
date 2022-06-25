import { ReactElement, useState, useCallback, useEffect } from "react";
import { repository } from "lib/repositories/logs";
import { useParams } from "react-router-dom";
import { List } from "./list";
import { logsListState, filteredLogsListState } from "lib/states/logsList";
import { useRecoilState, useRecoilValue } from "recoil";

export const Logs = (): ReactElement => {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [, setLogs] = useRecoilState(logsListState);
  const filteredKioskList = useRecoilValue(filteredLogsListState);

  const fetchLogs = useCallback(async () => {
    setIsLoading(true);

    const logs = params?.kioskId ?
      await repository.findKioskLogs(params?.kioskId) : await repository.all();

    setIsLoading(false);
    setLogs(logs);
  }, [setLogs, params?.kioskId]);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);


  return (
    <List isLoading={isLoading} logs={filteredKioskList} />
  )
}