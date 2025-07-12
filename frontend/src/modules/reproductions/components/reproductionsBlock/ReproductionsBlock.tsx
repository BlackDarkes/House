import { useReproductions } from "../../hooks/useReproductions";

export const ReproductionsBlock = () => {
  const { generateReproductions } = useReproductions();

  return (
    <ul>
      {generateReproductions()}
    </ul>
  );
}