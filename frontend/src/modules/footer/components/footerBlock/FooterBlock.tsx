import IconLogo from "@/assets/images/logo.svg?react";
import { Button } from "../../../../components/button/Button";
import IconFacebook from "@/assets/icons/facebook.svg?react";
import IconInstagram from "@/assets/icons/insta.svg?react";
import IconYoutube from "@/assets/icons/youtube.svg?react";
import styles from "./FooterBlock.module.scss"

export const FooterBlock = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.footerBlockLogo}>
        <IconLogo />
        <p className={styles.footerBlockLogoTexts}>
          <a href="tel:+79995435454" className={styles.footerBlockLogoTel}>+7 (999) 543-54-54</a>
          <span className={styles.footerBlockLogoMaster}>Мастерская</span>
        </p>
      </div>
      <div className={styles.footerBlockInfo}>
        <ul className={styles.footerBlockInfoList}>
          <li className={styles.footerBlockInfoItem}>
            <h3 className={styles.footerBlockInfoTitle}>Репродукции</h3>
            <a href="#" className={styles.footerBlockInfoLink}>Франция</a>
            <a href="#" className={styles.footerBlockInfoLink}>Германия</a>
            <a href="#" className={styles.footerBlockInfoLink}>Англия</a>
          </li>
          <li className={styles.footerBlockInfoItem}>
            <h3 className={styles.footerBlockInfoTitle}>Новинки</h3>
            <a href="#" className={styles.footerBlockInfoLink}>2021</a>
            <a href="#" className={styles.footerBlockInfoLink}>2020</a>
          </li>
          <li className={styles.footerBlockInfoItem}>
            <h3 className={styles.footerBlockInfoTitle}>О нас</h3>
            <a href="#" className={styles.footerBlockInfoLink}>Художники</a>
            <a href="#" className={styles.footerBlockInfoLink}>Менеджеры</a>
          </li>
        </ul>

        <div>
          <ul>
            <li>
              <Button ariaLabel="facebook" type="button">
                <IconFacebook />
              </Button>
            </li>
            <li>
              <Button ariaLabel="instagram" type="button">
                <IconInstagram />
              </Button>
            </li>
            <li>
              <Button ariaLabel="youtube" type="button">
                <IconYoutube />
              </Button>
            </li>
          </ul>

          <p>
            <span>Ink. House ®</span>
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </div>
  );
};