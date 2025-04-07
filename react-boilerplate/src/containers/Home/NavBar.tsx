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
    </div>
  );
};

export default NavBar;
