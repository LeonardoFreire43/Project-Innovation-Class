import { FunctionComponent } from 'react';
import styles from './Banner.module.css';

const Banner: FunctionComponent = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.image1}>
        <img className={styles.rectangleIcon} alt="" src="public/LOGON.jpg" />
      </div>
      <div className={styles.grupo4805Parent}>
        <div className={styles.grupo4805}>
          <div className={styles.loremIpsum}>
            <b>super</b>
            <span className={styles.sale}>sale</span>
          </div>
          <div className={styles.getAhead}>get ahead</div>
          <div className={styles.retngulo4129} />
        </div>
        <div className={styles.grupo4860}>
          <b className={styles.loremIpsum1}>Itens selecionados com até</b>
          <div className={styles.getAhead1}>get ahead</div>
          <div className={styles.retngulo41291} />
        </div>
        <div className={styles.grupo4861}>
          <b className={styles.loremIpsum}>50%off</b>
          <div className={styles.getAhead2}>get ahead</div>
          <div className={styles.retngulo41292} />
        </div>
         {/* Elemento visível apenas em telas menores */}
        <div id="mobile" className={styles.mobile}>
          <b className={styles.loremIpsum5}>Selected items up to</b>
        </div>
      </div>
    </div>
  );
};

export default Banner;
