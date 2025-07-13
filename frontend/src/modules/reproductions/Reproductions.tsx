import { Container } from "../../components/container/Container";
import { ReproductionsBlock } from "./components/reproductionsBlock/ReproductionsBlock";
import { Title } from "./components/title/Title";
import { useButtons } from "./hooks/useButtons";
import { useReproductions } from "./hooks/useReproductions";
import styles from './Reproductions.module.scss'

export const Reproductions = () => {
  const { getButtons } = useButtons();
  const { isLoading, error, generateReproductions } = useReproductions();
  const buttons = getButtons({
    base: styles.reproductionButton,
    active: styles.reproductionButtonActive 
  })

  return (
    <section>
      <Container>
        <Title buttons={buttons} />
        <ReproductionsBlock isLoading={isLoading} error={error} reproductions={generateReproductions} />
      </Container>
    </section>
  );
};
