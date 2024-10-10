import { get } from "@/lib/api/axios";
import store from "../store/store";
import { updateAllPets } from "../store/features/petsSlice";

export interface Pet {
  id: number;
  name: string;
  species: string;
  status: string;
  pet_status?: string;
  breed?: string;
}

interface GetAllPets {
  currentPage: number;
  totalPages: number;
  totalPets: number;
  pets: Pet[];
}

export const fetchAdoptPageData = async (): Promise<GetAllPets> => {
  const info: any = store.getState();
  const { species, breed, pet_status, age, page } = info.pets.filterInfo ?? {};

  const params = new URLSearchParams();

  if (species) params.append("species", species);
  if (breed) params.append("breed", breed);
  if (age > 0) params.append("age", age.toString());
  if (pet_status) params.append("pet_status", pet_status);
  if (page) params.append("page", page);

  params.append("sort_by", "pet_status");
  params.append("order", "desc");
  params.append("limit", "8");

  try {
    const response: any = await get(`pets?${params.toString()}`);
    store.dispatch(updateAllPets(response.data));
    return response.data as GetAllPets;
  } catch (error) {
    console.error("Error fetching:", error);
    throw error;
  }
};
