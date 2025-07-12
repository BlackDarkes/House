import { Container } from "../../components/container/Container";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HeaderMobile } from "./components/headerMobile/HeaderMobile";
import { Navigation } from "./components/navigation/Navigation";
import styles from "./Header.module.scss";

const BREAKPOINTS = 480;

export const Header = () => {
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS;

  return (
    <header className={styles.header}>
      {isMobile ? <HeaderMobile/> : (
        <Container>
          <Navigation />
        </Container>
      )}
    </header>
  );
};
