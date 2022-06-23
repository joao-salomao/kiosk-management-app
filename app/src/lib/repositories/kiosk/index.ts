import { Kiosk } from "lib/types";

export const repository = {
  async all(): Promise<Kiosk[]> {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + "/kiosks"
    );

    return await response.json();
  },

  async delete(id: Kiosk["id"]): Promise<void> {
    const response = await fetch(
      process.env.REACT_APP_API_BASE_URL + `/kiosks/${id}`,
      { method: "DELETE" }
    );

    return response.json();
  },
};
