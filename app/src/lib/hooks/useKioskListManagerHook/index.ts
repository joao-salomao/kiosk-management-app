import { useState, useCallback, useMemo } from "react";
import { repository } from "lib/repositories/kiosk";
import { Kiosk, StatusFilter } from "lib/types";

type FetchAllHandler = () => Promise<void>;
type DeleteByIdHandler = (kioskId: Kiosk["id"]) => Promise<void>;

type UseKioskListManagerHookReturn = {
  list: Kiosk[];
  isLoading: boolean;
  statusFilter: StatusFilter;
  fetchAll: FetchAllHandler;
  deleteById: DeleteByIdHandler;
  setStatusFilter: (status: StatusFilter) => void;
};

export const useKioskListManagerHook = (): UseKioskListManagerHookReturn => {
  const [list, setList] = useState<Kiosk[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>(
    StatusFilter.all
  );

  const filteredList = useMemo(() => {
    let result = list;

    if (statusFilter === StatusFilter.closed) {
      result = result.filter((k) => k.isKioskClosed === true);
    } else if (statusFilter === StatusFilter.open) {
      result = result.filter((k) => k.isKioskClosed === false);
    }

    return result;
  }, [list, statusFilter]);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);

    const kiosks = await repository.all();

    setList(kiosks);
    setIsLoading(false);
  }, []);

  const deleteById = useCallback<DeleteByIdHandler>(async (kioskId) => {
    await repository.delete(kioskId);
    setList((list) => list.filter((item) => item.id !== kioskId));
  }, []);

  return {
    list: filteredList,
    isLoading,
    statusFilter,
    fetchAll,
    deleteById,
    setStatusFilter,
  };
};
