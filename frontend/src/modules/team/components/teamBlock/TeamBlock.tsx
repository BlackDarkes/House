import ImageEasel from "@/assets/images/easel.png"
import ImageFirstPeople from "@/assets/images/peoples/people1.png";
import ImageSecondPeople from "@/assets/images/peoples/people2.png";
import ImageThreePeople from "@/assets/images/peoples/people3.png";
import styles from "./TeamBlock.module.scss";

export const TeamBlock = () => {
  return (
    <div className={styles.teamBlock}>
      <img src={ImageEasel} alt="холст" />

      <div className={styles.teamBlockInfo}>
        <h2 className={styles.teamBlockTitle}>Наша команда</h2>
        <p className={styles.teamBlockAbout}>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p> 
        <ul className={styles.teamBlockImages}>
          <li><img src={ImageFirstPeople} alt="" /></li>
          <li><img src={ImageSecondPeople} alt="" /></li>
          <li><img src={ImageThreePeople} alt="" /></li>
        </ul>
      </div>
    </div>
  );
}