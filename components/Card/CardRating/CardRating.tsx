import React, { FC } from 'react';
import Image from 'next/image';
import icon_starActive from '../../../public/starActive.svg';
import icon_star from '../../../public/star.svg';
import styles from './CardRating.module.scss';

interface IRating {
    rating: {
        count:number,
        rate: number
    }
};

const CardRating:FC<IRating> = ({rating}) => {

    const createStars = (count: number) => {
        let countStars: number[] = [];
        let text = `<div className=${styles.styleDiv}>`;
        for (let i = 0; i < count; ++i) {
          text = text + `<Image width=17 height=17 key=${i} src=${icon_starActive.src}></Image>`;
          if (countStars.length > 3) {
            break;
          } else {
            countStars.push(i);
          }
        }
      
        for (let i = count; i < 4; ++i) {
          text = text + `<Image width=17 height=17 key=${i} src=${icon_star.src}></Image>`;
          countStars.push(i);
        }
        text = text + `</div>`;
        return (
          <div className={styles.styleBlcok} dangerouslySetInnerHTML={{ __html: text }} />
        );
      };

    return (
        <div className={styles.rating}>
            {createStars(rating?.rate)}
            <p className={styles.reviews}>
                {rating?.count}отзыва
            </p>
        </div>
    )
};

export default CardRating;