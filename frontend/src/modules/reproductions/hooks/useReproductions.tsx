import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { IPaintings } from "../../../types/typePaintings";
import { Reproduction } from "../../../components/reproduction/Reproduction";
import { useStore } from "../../../store/store";

export const useReproductions = () => {
  const {
    isLoading,
    error,
    data: reproductions,
  } = useQuery<IPaintings[]>({
    queryKey: ["reproductions"],
    queryFn: async () => {
      const response = await axios.get<IPaintings[]>(
        import.meta.env.VITE_API_URL
      );
      return response.data;
    },
  });
  const { type } = useStore();

  const generateReproductions = ( style : Record<string, string>) => {
    if (!reproductions) return [];

    return reproductions
      ?.filter((reproduction) => type === reproduction.type)
      ?.map((reproduction) => (
        <Reproduction
          key={reproduction.id}
          reproduction={reproduction}
          className={style}
        />
      ));
  };

  return { generateReproductions, isLoading, error };
};
