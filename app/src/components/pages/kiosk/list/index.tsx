
import { ReactElement, useEffect } from 'react';
import { useKioskListManagerHook } from 'lib/hooks/useKioskListManagerHook'
import { Table } from './table'

export const List = (): ReactElement => {
  const { list, isLoading, fetchAll } = useKioskListManagerHook();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <Table kiosks={list} isLoading={isLoading} />
  )
}