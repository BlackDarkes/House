import type { ReactNode } from "react";
import IconLogo from "@/assets/images/logo.svg?react";
import IconShop from "@/assets/icons/cart.svg?react";
import styles from "./HeaderContent.module.scss";

interface IHeaderContent {
  children: ReactNode;
}
  
export const HeaderContent = ({ children }: IHeaderContent) => {
  return (
    <div className={styles.header}>
      <IconLogo className={styles.headerLogo} />
      <div className={`${styles.headerNavigation} ${styles.headerIcons}`}>
        { children }
        <button type="button" className={styles.headerIcon} aria-label="Открыть корзину">
          <IconShop />
        </button>
      </div>
    </div>
  );
}