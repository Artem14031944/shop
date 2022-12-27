import React, { FC } from 'react';
import styles from './CardButtonOutBasket.module.scss';

interface IButtonOutBasket {
    isBasket:boolean;
    setBasket:(isBasket: boolean) => void;
};


const CardButtonOutBasket: FC<IButtonOutBasket> = ({isBasket, setBasket}) => {
  return (
    <button 
        onClick={() => setBasket(!isBasket)}
        className={styles.btnBasket}
    >
        В корзине
    </button>
  )
};

export default CardButtonOutBasket;