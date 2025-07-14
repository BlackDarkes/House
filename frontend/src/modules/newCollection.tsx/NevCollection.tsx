import { Container } from "../../components/container/Container";
import { NewCollectionBlock } from "./components/NewCollectionBlock";
import styles from './NevCollection.module.scss'

export const NewCollection = () => {
  return (
    <section className={styles.NevCollection} id="news">
      <Container>
        <NewCollectionBlock />
      </Container>
    </section>
  );
};
