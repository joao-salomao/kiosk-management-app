import { Kiosk, StatusFilterEnum } from "lib/types";

export const applyStatusFilter = (
  kiosks: Kiosk[],
  filter: StatusFilterEnum
): Kiosk[] => {
  if (filter === StatusFilterEnum.closed) {
    return kiosks.filter((k) => k.isKioskClosed === true);
  }

  if (filter === StatusFilterEnum.open) {
    return kiosks.filter((k) => k.isKioskClosed === false);
  }

  return kiosks;
};
