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
    "Departamento 1", "Departamento 2", "Departamento 3", "Departamento 4", "Departamento 5",
    "Departamento 6", "Departamento 7", "Departamento 8", "Departamento 9", "Departamento 10",
    "Departamento 11", "Departamento 12", "Departamento 13", "Departamento 14", "Departamento 15"
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
            <div className={styles.categorias}>
              {categorias.map((categoria, index) => (
                <div
                  key={index}
                  className={`${styles.categoriaItem} ${categoriaSelecionada === index ? styles.categoriaClicada : ''}`}
                  onClick={() => handleCategoriaClick(index)}
                >
                  {categoria}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
        <div className={styles.verTodasAs}>Departamento</div>
      </div>
    </div>
  );
};

export default HomeMenu;