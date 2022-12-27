import React, { FC } from 'react';
import BtnCount from './BtnCount/BtnCount';
import styles from './CardButtonInBasket.module.scss';

interface IButtonInBasket {
  isBasket:boolean;
  setBasket:(isBasket: boolean) => void;
  count: number;
  setCount: (count: number) => void;
};


const CardButtonInBasket: FC<IButtonInBasket> = ({
  isBasket, 
  setBasket, 
  count, 
  setCount
}) => {
  return (
    <div className={styles.blockBtn}>
      <button 
        onClick={() => setBasket(!isBasket)}
        className={styles.btn}>
          В корзину
      </button>
      <BtnCount count={count} setCount={setCount}  />
    </div>
  )
};

export default CardButtonInBasket;