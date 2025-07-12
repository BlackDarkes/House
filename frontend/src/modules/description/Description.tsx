import { Container } from "../../components/container/Container";
import { DescriptionBlock } from "./components/DescriptionBlock/DescriptionBlock";
import styles from './Description.module.scss'

export const Description = () => {
  return (
    <section className={styles.description}>
      <Container>
        <DescriptionBlock />
      </Container>
    </section>
  );
};
