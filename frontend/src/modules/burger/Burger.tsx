import { BurgerBlock } from "./components/burgerBlock/BurgerBlock";
import styles from "./Burger.module.scss";
import { useStore } from "../../store/store";

export const Burger = () => {
  const { isBurger, handleBurger } = useStore();

  return (
    <div className={isBurger ? `${styles.burger} ${styles.active}` : styles.burger}>
      <BurgerBlock closeBurger={handleBurger} />
    </div>
  );
};
