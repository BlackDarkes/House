import IconLogo from "../../../../assets/images/logo.svg?react";
import styles from './Navigation.module.scss'

export const Navigation = () => {
  return (
    <div className={styles.header}>
      <IconLogo className={styles.headerLogo} />
      <nav>
        <ul className={styles.headerList}>
          <li><a href="#" className={styles.headerLink}>Репродукции</a></li>
          <li><a href="#" className={styles.headerLink}>Новинки</a></li>
          <li><a href="#" className={styles.headerLink}>О нас</a></li>
        </ul>
      </nav>
    </div>
  );
}