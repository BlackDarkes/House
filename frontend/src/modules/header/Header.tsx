import { Container } from "../../components/container/Container";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useStore } from "../../store/store";
import { HeaderMobile } from "./components/headerMobile/HeaderMobile";
import { Navigation } from "./components/navigation/Navigation";
import styles from "./Header.module.scss";

const BREAKPOINTS = 480;

export const Header = () => {
  const { handleBurger } = useStore();
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS;

  return (
    <header className={styles.header}>
      {isMobile ? <HeaderMobile openBurger={handleBurger} /> : (
        <Container>
          <Navigation />
        </Container>
      )}
    </header>
  );
};
