import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IPaintings } from "../../../types/typePaintings";
import { Reproduction } from "../../../components/reproduction/Reproduction";

export const useReproductions = () => {
  const { data: reproductions } = useQuery<IPaintings[]>({
    queryKey: ["reproductions"],
    queryFn: async () => {
      const response = await axios.get<IPaintings[]>(import.meta.env.VITE_API_URL);
      return response.data;
    }
  });

  const generateReproductions = () => {
    return reproductions?.map((reproduction) => (
      <Reproduction key={reproduction.id} reproduction={reproduction} />
    ))
  }

  return { generateReproductions };
}