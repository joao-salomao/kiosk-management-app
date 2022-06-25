import { Log, Kiosk } from "lib/types";

export const repository = {
  async all(): Promise<Log[]> {
    const response = await fetch(process.env.REACT_APP_API_BASE_URL + "/logs");
    return response.json();
  },

  async findKioskLogs(id: Kiosk["id"]): Promise<Log[]> {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + `/kiosks/${id}/logs`
    );
    return response.json();
  },
};
