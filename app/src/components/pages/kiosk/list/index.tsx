
import { ReactElement, useCallback, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useKioskListManagerHook } from 'lib/hooks/useKioskListManagerHook'
import { Table, TableProps } from './table'

export const List = (): ReactElement => {
  const navigate = useNavigate();
  const { list, isLoading, fetchAll, deleteById } = useKioskListManagerHook();

  const onClickNewHandle: TableProps['onClickNew'] = useCallback(() => navigate('/new'), [navigate]);

  const onClickDeleteHandle: TableProps['onClickDelete'] = useCallback(async (id) => {
    const result = window.confirm("You really want delete this Kiosk?");

    if (!result) return;

    deleteById(id);
  }, [deleteById]);

  const onclickEditHandle: TableProps['onClickEdit'] = useCallback((id) => {
    navigate(`/edit/${id}`);
  }, [navigate]);

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <Table
      kiosks={list}
      isLoading={isLoading}
      onClickNew={onClickNewHandle}
      onClickEdit={onclickEditHandle}
      onClickDelete={onClickDeleteHandle}
    />
  )
}