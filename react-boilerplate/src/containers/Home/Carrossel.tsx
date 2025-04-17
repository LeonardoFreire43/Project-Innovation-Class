import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./Carrossel.module.css";

interface Produto {
  id: number;
  img: string;
  titulo: string;
  precoOriginal: string;
  precoAtual: string;
  link: string;
}

const produtos: Produto[] = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  img: "modelo.svg",
  titulo: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
  precoOriginal: "R$ 100,00",
  precoAtual: "R$ 79,90",
  link: "https://www.nike.com.br/snkrs/air-max-1-86-027221.html?cor=51",
}));

const Carrossel: React.FC = () => {
  const responsiveOptions = [
    {
      breakpoint: "1200px",
      numVisible: 5,
      numScroll: 5,
    },
    {
      breakpoint: "992px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (produto: Produto) => {
    return (
      <div className={styles.componente371}>
        <div className={styles.grupo19277}>
          <div className={styles.retngulo4300} />
          <img className={styles.j0a20731Icon} alt="" src={produto.img} />
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolorContainer}>
              <h3 className={styles.loremIpsumDolor}>{produto.titulo}</h3>
            </div>
            <div className={styles.groupParent}>
              <div className={styles.r10000R7990Parent}>
                <div className={styles.r10000}>{produto.precoOriginal}</div>
                <b className={styles.r100001}>{produto.precoAtual}</b>
              </div>
              <div className={styles.ouEmAtContainer}>
                <span>Ou em até </span>
                <b>10x de R$ 7,90</b>
              </div>
            </div>
          </div>
          <div className={styles.buttonMedium}>
            <b className={styles.button}>Comprar</b>
          </div>
        </div>
        <div className={styles.grupo19279}>
          <div className={styles.retngulo5819} />
          <b className={styles.novo}>Novo</b>
        </div>
        <div className={styles.cashbackWrapper}>
          <b>10% off </b>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.componente371Parent}>
      <Carousel
        value={produtos}
        itemTemplate={itemTemplate}
        numVisible={5}
        numScroll={5}
        responsiveOptions={responsiveOptions}
        circular
        autoplayInterval={5000}
        className="custom-carousel"
      />
    </div>
  );
};

export default Carrossel;
