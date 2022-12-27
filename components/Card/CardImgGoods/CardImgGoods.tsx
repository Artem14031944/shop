import React, { FC } from 'react';
import Image from 'next/image';
import styles from './CardImgGoods.module.scss';

interface IImage {
    image: string;
}


const CardImgGoods: FC<IImage> = ({image}) => {
  return (
    <div className={styles.card}>
        <Image
            src={image}
            alt={"img"}
            width={220}
            height={220}   
        />
    </div>
  )
};

export default CardImgGoods;