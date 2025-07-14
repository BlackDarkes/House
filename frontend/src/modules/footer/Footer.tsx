import { Container } from "../../components/container/Container";
import { FooterBlock } from "./components/footerBlock/FooterBlock";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <FooterBlock />
      </Container>
    </footer>
  );
};
