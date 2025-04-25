import { FunctionComponent } from 'react';
import styles from './Contato.module.css';


const Contato:FunctionComponent = () => {
  	return (
    		<><div className={styles.groupParent}>
                <b className={styles.contato}>Entre em contato conosco e verifique a disponibilidade para sua região!</b>
            </div>
                <div className={styles.image}>
                    <img className={styles.Banner} src="public/banner.svg" alt="" />
                </div>
                </>
    );
};

export default Contato;
