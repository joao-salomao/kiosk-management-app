import { useState, useCallback } from "react";
import { repository } from "lib/repositories/kiosk";
import { Kiosk } from "lib/types";

type FetchAllHandler = () => Promise<void>;
type DeleteByIdHandler = (kioskId: Kiosk["id"]) => Promise<void>;
type UpdateHandler = (
  kioskId: Kiosk["id"],
  data: Omit<Kiosk, "id">
) => Promise<void>;

type UseKioskListManagerHookReturn = {
  list: Kiosk[];
  isLoading: boolean;
  fetchAll: FetchAllHandler;
  deleteById: DeleteByIdHandler;
  update: UpdateHandler;
};

export const useKioskListManagerHook = (): UseKioskListManagerHookReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState<Kiosk[]>([]);

  const fetchAll = useCallback(async () => {
    setIsLoading(true);

    const kiosks = await repository.all();

    setList(kiosks);
    setIsLoading(false);
  }, []);

  const deleteById = useCallback<DeleteByIdHandler>(async (kioskId) => {
    //
  }, []);

  const update = useCallback<UpdateHandler>(async (kioskId, data) => {
    //
  }, []);

  return {
    list,
    isLoading,
    update,
    fetchAll,
    deleteById,
  };
};
