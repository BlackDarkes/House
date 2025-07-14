import IconBurgerClose from "@/assets/icons/burgerClose.svg?react";
import styles from "./BurgerBlock.module.scss";

interface IBurgerBlock {
  closeBurger: () => void;
}


export const BurgerBlock = ({ closeBurger }: IBurgerBlock) => {
  return (
    <>
      <button type="button" className={styles.burgerClose} onClick={closeBurger} aria-label="Закрыть меню">
        <IconBurgerClose />
      </button>
      <ul className={styles.burgerList}>
        <li><a href="#reproduction" className={styles.burgerLink}>Репродукции</a></li>
        <li><a href="#news" className={styles.burgerLink}>Новинки</a></li>
        <li><a href="#team" className={styles.burgerLink}>О нас</a></li>
      </ul>
    </>
  );
}