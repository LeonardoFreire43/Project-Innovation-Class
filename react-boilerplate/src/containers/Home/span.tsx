import { FunctionComponent } from 'react';
import styles from './span.module.css';


const Span:FunctionComponent = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.ganheR1000DeContainer}>
          					<b className={styles.ganheR1000}>Ganhe  R$10,00  de desconto no seu primeiro pedido. Utilize o cupom</b>
          					<i className={styles.i}>{` `}</i>
          					<i>DESCONTO10</i>
        				</div>
      			</div>
    		</div>);
};

export default Span;
