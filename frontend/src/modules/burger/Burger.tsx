import { BurgerBlock } from "./components/burgerBlock/BurgerBlock";
import styles from "./Burger.module.scss";
import { useStore } from "../../store/store";
import { useWindowSize } from "../../hooks/useWindowSize";

const BREAKPOINTS = 480;

export const Burger = () => {
  const { isBurger, handleBurger } = useStore();
  const { width } = useWindowSize();
  const isMobile = width < BREAKPOINTS;

  return isMobile ? (
    <div
      className={isBurger ? `${styles.burger} ${styles.active}` : styles.burger}
    >
      <BurgerBlock closeBurger={handleBurger} />
    </div>
  ) : (
    <div></div>
  );
};
