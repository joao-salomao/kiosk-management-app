import { Kiosk } from "lib/types";

const KIOSKS_BASE_URL = process.env.REACT_APP_API_BASE_URL + "/kiosks";

export const repository = {
  async all(): Promise<Kiosk[]> {
    const response = await fetch(KIOSKS_BASE_URL);
    return response.json();
  },

  async create(data: Omit<Kiosk, "id">) {
    const response = await fetch(KIOSKS_BASE_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  },

  async delete(id: Kiosk["id"]): Promise<void> {
    const response = await fetch(KIOSKS_BASE_URL + `/${id}`, {
      method: "DELETE",
    });

    return response.json();
  },
};
