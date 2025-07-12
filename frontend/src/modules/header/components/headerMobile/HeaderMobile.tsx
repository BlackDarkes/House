import IconBurger from "@/assets/icons/burgerOpen.svg?react";
import styles from "./HeaderMobile.module.scss";
import { HeaderContent } from "../../../../components/HeaderContent/HeaderContent";

export const HeaderMobile = () => {
  return (
    <HeaderContent>
      <button
        type="button"
        className={styles.headerIcon}
        aria-label="Открыть меню"
      >
        <IconBurger />
      </button>
    </HeaderContent>
  );
};
