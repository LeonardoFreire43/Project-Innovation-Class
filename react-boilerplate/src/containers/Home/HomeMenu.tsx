import { FunctionComponent, useState } from 'react';
import styles from './HomeMenu.module.css';

const HomeMenu: FunctionComponent = () => {
  const [mostrarPainel, setMostrarPainel] = useState(false);
  const [categoriaClicada, setCategoriaClicada] = useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);

  const togglePainel = () => {
    setMostrarPainel(!mostrarPainel);
    setCategoriaClicada(!categoriaClicada);
  };

  const handleCategoriaClick = (index: number) => {
    setCategoriaSelecionada(index);
  };

  const categorias = [
    "Departamento", "Departamento", "Departamento", "Departamento", "Departamento",
    "Departamento", "Departamento", "Departamento", "Departamento", "Departamento",
    "Departamento", "Departamento", "Departamento", "Departamento", "Departamento"
  ];

  return (
    <div className={styles.homeMenu}>
      <div className={styles.frameParent}>
        <div
          className={`${styles.grupo19319Parent} ${categoriaClicada ? styles.categoriaClicada : ''}`}
          onClick={togglePainel}
          style={{ cursor: 'pointer' }}
        >
          <div className={styles.grupo19319}>
            <div className={styles.linha231} />
            <div className={styles.linha232} />
            <div className={styles.linha233} />
          </div>
          <b className={styles.verTodasAs}>Todas as Categorias</b>
        </div>

        {mostrarPainel && (
          <div className={styles.miniPainel}>
            <div className={styles.ladoEsquerdo}>
              <div className={styles.scrollArea}>
                <div className={styles.categorias}>
                  {categorias.map((categoria, index) => (
                    <div
                      key={index}
                      className={`${styles.categoriaItem} ${
                        categoriaSelecionada === index ? styles.categoriaClicada : ''
                      }`}
                      onClick={() => handleCategoriaClick(index)}
                    >
                  
                      <img
                        className={`${styles.arrowIcon} ${
                          categoriaSelecionada === index ? styles.arrowSelecionada : ''
                        }`}
                        src={
                          categoriaSelecionada === index
                            ? 'public/arrow-blue.svg'
                            : 'public/arrow.svg' 
                        }
                        alt="Seta"
                      />
                      {categoria}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.ladoDireito}>
              {[...Array(3)].map((_, colIndex) => (
                <div key={colIndex} className={styles.frameParent1}>
                  <div className={styles.loremIpsumLoremIpsumLoremWrapper}>
                    <b className={styles.loremIpsumLoremIpsumLorem}>Categoria</b>
                  </div>

                  {[...Array(7)].map((_, index) => (
                    <div key={index} className={styles.loremIpsumLoremIpsumLoremContainer}>
                      <div className={styles.loremIpsumLoremIpsumLorem}>Categoria</div>
                    </div>
                  ))}
                </div>
              ))}

              <div className={styles.grupo18846}>
                <div className={styles.imagemContainer}>
                  <img
                    className={styles.gradientOverlayIcon}
                    alt=""
                    src="public/caneca.jpg"
                  />
                  <div className={styles.confiraOsProdutosQueContainer}>
                    <p className={styles.confiraOs}>{`Confira os `}</p>
                    <p className={styles.confiraOs}>Produtos</p>
                    <p className={styles.confiraOs}>
                      <b>Que acabaram</b>
                    </p>
                    <p className={styles.confiraOs}>
                      <b>De chegar</b>
                    </p>
                  </div>
                  <button className={styles.conferir}>ver todos</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {categorias.slice(0, 8).map((categoria, index) => (
          <div key={index} className={styles.verTodasAs}>
            {categoria}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMenu;
