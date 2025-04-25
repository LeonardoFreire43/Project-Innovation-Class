import { FunctionComponent, useState } from "react";
import styles from "./NavBar.module.css";

const NavBar: FunctionComponent = () => {
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado para armazenar a palavra pesquisada
  const [showTooltip, setShowTooltip] = useState<boolean>(false); // Estado para controlar a exibição do balão

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value); // Atualiza o estado com o valor digitado
    setShowTooltip(true); // Exibe o balão
    setTimeout(() => setShowTooltip(false), 2000); 
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.searchContainer}>
          <img className={styles.lupaicon} src="public/Lupa.svg" alt="" />
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Digite aqui o que você procura"
            onChange={handleSearch} // Chama a função ao digitar
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
      <div className={styles.menu2023}>
        <img className={styles.menu} src="public/Menu.svg" />
      </div>

      {/* Mini balão exibindo a palavra pesquisada */}
      {showTooltip && (
        <div className={styles.tooltip}>
          Você pesquisou: <strong>{searchTerm}</strong>
        </div>
      )}
    </div>
  );
};

export default NavBar;
