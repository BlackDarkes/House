import type { ReactNode } from "react";
import styles from './reproductionsBlock.module.scss'

interface IReproductionsBlock {
  isLoading: boolean;
  error: Error | null;
  reproductions: (styles: Record<string, string>) => ReactNode;
}

export const ReproductionsBlock = ({ isLoading, error, reproductions }: IReproductionsBlock) => {
  if (isLoading) return <p className={styles.loading}>Loading...</p>
  if (error) return <p className={styles.error}>Error: Не удалось загрузить репродукции</p>

  return (
    <ul className={styles.reproductionList}>
      {reproductions(styles)} 
    </ul>
  );
}