import { BurgerBlock } from "./components/burgerBlock/BurgerBlock";
import styles from "./Burger.module.scss";

export const Burger = () => {
  return (
    <div className={styles.burger}>
      <BurgerBlock />
    </div>
  );
};
