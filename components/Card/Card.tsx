import React, { FC } from 'react';
import styles from './Card.module.scss';

export interface IitemCard {
    id: number,
    category: string,
    description: string,  
    image: string,
    price: number,
    title: string,
    rating: {
        rate: number,
        count: number,
    },
};

interface ICard {
    card: IitemCard
};


const Card:FC<ICard> = ({card}) => {
  return (
    <div className={styles.card}>
       {card.id}
    </div>
  )
};

export default Card;