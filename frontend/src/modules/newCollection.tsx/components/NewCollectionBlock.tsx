import { Button } from "../../../components/button/Button";
import IconStarYellow from "@/assets/icons/starYellow.svg?react";
import styles from './NewCollectionBlock.module.scss'

export const NewCollectionBlock = () => {
  return (
    <div className={styles.NevCollectionBlock}>
      <div>
        <p className={styles.NevCollectionBlockTitle}>
          <IconStarYellow className={styles.NevCollectionBlockTitleIcon} />
          <span className={styles.NevCollectionBlockTitleText}>Новая коллекция французских авторов</span>
        </p>
        <p className={styles.NevCollectionBlockText}>
          <span>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений. </span>
          <span>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</span>
        </p>
      </div>

      <Button type="button" ariaLabel="Ознакомиться" className={styles.NevCollectionBlockButton}>
        Ознакомиться
      </Button>
    </div>
  );
};
