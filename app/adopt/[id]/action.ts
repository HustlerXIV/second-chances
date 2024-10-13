import { get } from "@/lib/api/axios";

export const getPet = async (id: string) => {
  try {
    const response = await get(`pets/${id}`);
    return response.data;
  } catch {
    console.log("Error");
  }
};
