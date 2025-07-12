import styles from "./Navigation.module.scss";
import { HeaderContent } from "../../../../components/HeaderContent/HeaderContent";

export const Navigation = () => {
  return (
    <HeaderContent>
      <nav>
        <ul className={styles.headerList}>
          <li>
            <a href="#" className={styles.headerLink}>
              Репродукции
            </a>
          </li>
          <li>
            <a href="#" className={styles.headerLink}>
              Новинки
            </a>
          </li>
          <li>
            <a href="#" className={styles.headerLink}>
              О нас
            </a>
          </li>
        </ul>
      </nav>
    </HeaderContent>
  );
};
