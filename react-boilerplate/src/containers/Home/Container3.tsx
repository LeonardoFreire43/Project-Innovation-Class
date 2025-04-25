import { FunctionComponent } from 'react';
import styles from './Container3.module.css';


const Container3:FunctionComponent = () => {
  	return (
    		<div className={styles.primeiroBannner}>
      			<div className={styles.primeiroBanner} />
      			<img className={styles.freeMugMockup2Icon} alt="" src="public/Mug.svg" />
      			<div className={styles.texto}>
        				<b className={styles.titulo}>Lorem Ipsum</b>
        				<div className={styles.duisConsecteturMetus}>{`Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.                  `}</div>
        				<div className={styles.duisConsecteturMetus}>{`Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.                  `}</div>
      			</div>
    		</div>);
};

export default Container3;
