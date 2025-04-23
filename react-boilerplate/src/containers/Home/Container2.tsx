import { FunctionComponent } from "react";
import styles from "./Container2.module.css";

const Container2: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      {/* Retângulo de fundo */}
      <div className={styles.rectangleDiv}></div>

      {/* Título */}
      <b className={styles.loremIpsum}>Lorem ipsum</b>

      {/* Imagem do banner */}
      <div className={styles.image}>
        <img
          className={styles.segundoBanner}
          alt="Segundo Banner"
          src="public/Banner2.svg"
        />
      </div>

      {/* Textos descritivos */}
      <div className={styles.textWrapper}>
        <div className={styles.aeneanMassaCum}>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem.
        </div>
        <div className={styles.aeneanMassaCum1}>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem.
        </div>
        <div className={styles.aeneanMassaCum2}>
          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
          pellentesque eu, pretium quis, sem.
        </div>
      </div>

      {/* Bolinhas e Ícones */}
      <div className={styles.locationWrapper}>
        <div className={styles.locationItem}>
          <div className={styles.ellipseDiv}></div>
          <img className={styles.mapPinIcon} alt="Map Pin" src="public/map.svg" />
        </div>
        <div className={styles.locationItem}>
          <div className={styles.ellipseDiv1}></div>
          <img className={styles.mapPinIcon1} alt="Map Pin" src="public/map.svg" />
        </div>
        <div className={styles.locationItem}>
          <div className={styles.ellipseDiv2}></div>
          <img className={styles.mapPinIcon2} alt="Map Pin" src="public/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default Container2;
