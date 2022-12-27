import React, { FC } from 'react';
import Image from 'next/image';
import icon_like from '../../../../public/likeActive.svg'
import styles from './CardLike.module.scss';

interface ILike {
    isLike: boolean;
    setLike: (isLike: boolean) => void
};


const CardLike:FC<ILike> = ({isLike, setLike}) => {
  return (
    <Image
        className={styles.icon}
        onClick={()=> setLike(!isLike)}
        src={icon_like}
        alt={"icon_like"}
        width={40}
        height={40}
    />
  )
};

export default CardLike;