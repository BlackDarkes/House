import { Container } from "../../components/container/Container";
import { ReproductionsBlock } from "./components/reproductionsBlock/ReproductionsBlock";
import { Title } from "./components/title/Title";
import { useButtons } from "./hooks/generateButton";
import styles from './Reproductions.module.scss'

export const Reproductions = () => {
  const { getButtons } = useButtons();
  const buttons = getButtons({
    base: styles.reproductionButton,
    active: styles.reproductionButtonActive 
  })

  return (
    <section>
      <Container>
        <Title buttons={buttons} />
        <ReproductionsBlock />
      </Container>
    </section>
  );
};
