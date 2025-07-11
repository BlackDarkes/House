import { Container } from "../../components/container/Container";
import { Navigation } from "./components/navigation/Navigation";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
};
