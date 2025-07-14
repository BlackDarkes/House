import { Container } from "../../components/container/Container";
import { TeamBlock } from "./components/teamBlock/TeamBlock";
import styles from "./Team.module.scss";

export const Team = () => {
  return (
    <section className={styles.team} id="team">
      <Container>
        <TeamBlock />
      </Container>
    </section>
  );
};
