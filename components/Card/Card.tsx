import React, { FC, useState } from 'react';
import CardHit from './CardHit/CardHit';
import CardImgGoods from './CardImgGoods/CardImgGoods';
import CardCategory from './CardCategory/CardCategory';
import CardDescription from './CardDescription/CardDescription';
import CardPrice from './CardPrice/CardPrice';
import CardRating from './CardRating/CardRating';
import CardButtonInBasket from './CardButtons/CardButtonInBasket/CardButtonInBasket';
import CardButtonOutBasket from './CardButtons/CardButtonOutBasket/CardButtonOutBasket';
import CardNotLike from './CardLikes/CardNotLike/CardNotLike';
import CardLike from './CardLikes/CardLike/CardLike';
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


const Card: FC<ICard> = ({card}) => {

  const[isBasket, setBasket] = useState(false);
  const[isLike, setLike] = useState(false);
  const[count, setCount] = useState(1);

  console.log(card, 'card')

  const {
    image, 
    category,
    description,
    price,
    rating,
    title,
  } = card;

  console.log(card.rating.count,  "count")

  return (
    <div className={styles.card}>
      {card.rating.count > 300 && <CardHit/>} 
      <CardImgGoods image={image}/>
      <div className={styles.cardInfo}>
        <CardCategory category={category}/>
        <CardRating rating={rating}/>
      </div>
      <CardDescription description={title}/>
      <CardPrice price={price}/>
      <div className={styles.priceAndLike}>
        {isBasket ? 
          <CardButtonOutBasket isBasket={isBasket} setBasket={setBasket} /> 
        : <CardButtonInBasket 
            isBasket={isBasket} 
            setBasket={setBasket} 
            count={count}
            setCount={setCount}  
          />}
        {isLike ? 
          <CardLike isLike={isLike} setLike={setLike} /> 
        : <CardNotLike isLike={isLike} setLike={setLike} />}
      </div>
    </div>
  )
};

export default Card;