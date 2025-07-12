import type { ReactNode } from "react";
import styles from './Title.module.scss'

interface ITitle {
  buttons: ReactNode;
}

export const Title = ({ buttons }: ITitle) => {
  return (
    <div className={styles.reproductionTitle}>
      <h2 className={styles.reproductionTitleTitle}>Репродукции</h2>

      <div className={styles.reproductionTitleButtons}>
        {buttons}
      </div>
    </div>
  );
}