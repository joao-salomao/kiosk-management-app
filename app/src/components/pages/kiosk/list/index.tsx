
import { ReactElement, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useKioskListManagerHook } from 'lib/hooks/useKioskListManagerHook'
import { Table } from './table'

export const List = (): ReactElement => {
  const navigate = useNavigate();
  const { list, isLoading, fetchAll } = useKioskListManagerHook();

  const handleOnClickNew = useCallback(() => navigate('/new'), [navigate]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <Table kiosks={list} isLoading={isLoading} onClickNew={handleOnClickNew} />
  )
}