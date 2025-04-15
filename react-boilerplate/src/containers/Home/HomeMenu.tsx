import { FunctionComponent, useState } from 'react';
import styles from './HomeMenu.module.css';

const HomeMenu: FunctionComponent = () => {
  const [mostrarPainel, setMostrarPainel] = useState(false);
  const [mostrarPainelSimplificado, setMostrarPainelSimplificado] = useState<number | null>(null); // Controla qual "Departamento" foi clicado
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<number | null>(null);

  const togglePainel = () => {
    setMostrarPainel(!mostrarPainel);
    setMostrarPainelSimplificado(null); // Fecha o painel simplificado, se estiver aberto
  };

  const handleDepartamentoClick = (index: number) => {
    setMostrarPainelSimplificado(index); // Abre o painel simplificado para o "Departamento" clicado
    setMostrarPainel(false); // Fecha o painel completo, se estiver aberto
  };

  const handleCategoriaClick = (index: number) => {
    setCategoriaSelecionada(index);
  };

  const categorias = [
    "Departamento", "Departamento", "Departamento", "Departamento", "Departamento",
    "Departamento", "Departamento", "Departamento", "Departamento", "Departamento"
  ];

  return (
    <div className={styles.homeMenu}>
      <div className={styles.frameParent}>
        {/* Botão para abrir o painel completo */}
        <div
          className={`${styles.grupo19319Parent} ${mostrarPainel ? styles.categoriaClicada : ''}`}
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

        {/* Departamentos clicáveis */}
        {categorias.map((categoria, index) => (
          <div
            key={index}
            className={`${styles.grupo19319Parent} ${
              mostrarPainelSimplificado === index ? styles.categoriaClicada : ''
            }`}
            onClick={() => handleDepartamentoClick(index)}
            style={{ cursor: 'pointer', }}
          >
            <b className={styles.verTodasAs}>{categoria}</b>
          </div>
        ))}

        {/* Painel completo */}
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

        {/* Painel simplificado */}
        {mostrarPainelSimplificado !== null && (
          <div className={`${styles.miniPainel} ${styles.departamentoPainel}`}>
            <div className={styles.ladoDireito}>
              <b className={styles.departamento}>Departamento</b>

              <div className={styles.categorias}>
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
              </div>

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
      </div>
    </div>
  );
};

export default HomeMenu;
