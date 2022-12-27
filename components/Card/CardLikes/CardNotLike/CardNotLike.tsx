import React, { FC } from 'react';
import Image from 'next/image';
import icon_notLike from '../../../../public/like.svg'
import styles from './CardNotLike.module.scss';

interface ILike {
    isLike: boolean;
    setLike: (isLike: boolean) => void
};


const CardNotLike:FC<ILike> = ({isLike, setLike}) => {
  return (
    <Image
        className={styles.icon}
        onClick={()=> setLike(!isLike)}
        src={icon_notLike}
        alt={"icon_notLike"}
        width={40}
        height={40}
    />
  )
};

export default CardNotLike;