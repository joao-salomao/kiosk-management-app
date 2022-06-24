
import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SweetAlert from 'sweetalert2';
import { toast } from 'react-toastify';
import {
  useRecoilState,
  useRecoilValue
} from 'recoil';
import { repository } from "lib/repositories/kiosk";
import { Table, TableProps } from './table'
import { filteredKioskListState, kioskListState } from 'lib/states/kioskList.ts';

export const List = (): ReactElement => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [, setKioskList] = useRecoilState(kioskListState);
  const filteredKioskList = useRecoilValue(filteredKioskListState);

  const onClickNewHandle: TableProps['onClickNew'] = useCallback(() => navigate('/new'), [navigate]);

  const onClickDeleteHandle: TableProps['onClickDelete'] = useCallback(async (id) => {
    SweetAlert.fire({
      title: `You really want delete the Kiosk #${id}?`,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      showLoaderOnConfirm: true,
      confirmButtonColor: "#1D4ED8",
      preConfirm: async (result) => {
        if (!result) return;

        await repository.delete(id);

        toast.success(`Kiosk #${id} successfully delete!`, { type: 'success' });
        setKioskList((list) => list.filter(k => k.id !== id));
      }
    })
  }, [setKioskList]);

  const onclickEditHandle: TableProps['onClickEdit'] = useCallback((id) => {
    navigate(`/edit/${id}`);
  }, [navigate]);

  const onClickLogsHandler: TableProps['onClickLogs'] = useCallback((id) => {
    navigate(`/logs/${id}`);
  }, [navigate]);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);

    const kiosks = await repository.all();

    setKioskList(kiosks);
    setIsLoading(false);
  }, [setKioskList]);


  useEffect(() => {
    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      kiosks={filteredKioskList}
      isLoading={isLoading}
      onClickNew={onClickNewHandle}
      onClickEdit={onclickEditHandle}
      onClickLogs={onClickLogsHandler}
      onClickDelete={onClickDeleteHandle}
    />
  )
}