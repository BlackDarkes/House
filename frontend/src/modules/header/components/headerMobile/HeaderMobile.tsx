import IconBurger from "@/assets/icons/burgerOpen.svg?react";
import styles from "./HeaderMobile.module.scss";
import { HeaderContent } from "../../../../components/HeaderContent/HeaderContent";

interface IHandleMobile {
  openBurger: () => void;
}

export const HeaderMobile = ({ openBurger }: IHandleMobile) => {
  return (
    <HeaderContent>
      <button
        type="button"
        className={styles.headerIcon}
        onClick={openBurger}
        aria-label="Открыть меню"
      >
        <IconBurger />
      </button>
    </HeaderContent>
  );
};
