import { ReactElement, useState, useCallback } from "react";
import { useMountEffect } from '@react-hookz/web/esm';
import { repository } from "lib/repositories/logs";
import { List } from "./list";
import { logsListState, filteredLogsListState } from "lib/states/logsList";
import { useRecoilState, useRecoilValue } from "recoil";

export const Logs = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(false);

  const [, setLogs] = useRecoilState(logsListState);
  const filteredKioskList = useRecoilValue(filteredLogsListState);

  const fetchLogs = useCallback(async () => {
    setIsLoading(true);

    const logs = await repository.all();

    setIsLoading(false);
    setLogs(logs);
  }, [setLogs]);

  useMountEffect(() => {
    fetchLogs();
  });

  return (
    <List isLoading={isLoading} logs={filteredKioskList} />
  )
}