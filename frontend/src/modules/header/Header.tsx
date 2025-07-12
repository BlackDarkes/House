import { Container } from "../../components/container/Container";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useStore } from "../../store/store";
import { BREAKPOINTS } from "../../utils/constants";
import { HeaderMobile } from "./components/headerMobile/HeaderMobile";
import { Navigation } from "./components/navigation/Navigation";
import styles from "./Header.module.scss";

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
