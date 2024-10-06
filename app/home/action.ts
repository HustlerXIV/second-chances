import { get } from "@/lib/api/axios";

export interface Pet {
  id: number;
  name: string;
  species: string;
  status: string;
}

interface GetAllPets {
  currentPage: number;
  totalPages: number;
  totalPets: number;
  pets: Pet[];
}

export const fetchHomePageData = async (
  species: string
): Promise<GetAllPets> => {
  try {
    const response = await get(
      `pets?species=${species}&sort_by=pet_status&pet_status=available&order=desc&limit=6`
    );
    return response.data as GetAllPets;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};
