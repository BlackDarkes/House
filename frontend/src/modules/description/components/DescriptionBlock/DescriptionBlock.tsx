import ImageBeard from "@/assets/images/beard.png";
import styles from './DescriptionBlock.module.scss'
import { Button } from "../../../../components/button/Button";

export const DescriptionBlock = () => {
  return (
    <div className={styles.descriptionBlock}>
      <img src={ImageBeard} alt="Картина с птицей" className={styles.descriptionBlockImage} />
      <div>
        <div className={styles.descriptionBlockTexts}>
          <h2 className={styles.descriptionBlockTitle}>Реплики картин от <span className={styles.descriptionBlockTitleInk}>Ink. House</span></h2>
          <p className={styles.descriptionBlockAbout}>
            Высокое качество отрисовки на плотной бумаге или льняном холсте.
            Редкие произведения, доступные цены.
          </p>
        </div>
        <Button type="button" className={styles.descriptionBlockButton} ariaLabel="переход к продукции">
          Продукция
        </Button>
      </div>
    </div>
  );
};
