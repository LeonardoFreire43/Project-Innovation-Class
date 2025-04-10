import { FunctionComponent } from "react";
import styles from "./NavBar.module.css";

const NavBar: FunctionComponent = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.searchContainer}>
          <img className={styles.lupaicon} src="public/Lupa.svg" alt="" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Digite aqui o que você procura"
          />
        </div>
      </nav>
      <div className={styles.logo}>
        <img className={styles.grupo21089Icon} alt="" src="public/Logo.svg" />
      </div>
        <div className={styles.grupo19041Parent}>
        <div className={styles.grupo19041}>
          <img className={styles.grupo19210Icon} alt="" src="public/Pessoa.svg" />
        <div className={styles.grupo10326}>
          <div className={styles.olNomeCliente}>
            <p className={styles.ol}>Olá,</p>
            <p className={styles.ol}>Nome cliente!</p>
          </div>
        </div>
        </div>
        <img className={styles.frameChild} alt="" src="public/Carrinho.svg" />
        </div>
        <div className={styles.menu2023}>"
          <img className={styles.menu}src="public/Menu.svg"/>
        </div>
    </div>
  );
};

export default NavBar;
