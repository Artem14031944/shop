import React, { FC } from 'react';
import Image from 'next/image';
import icon_notLike from '../../../../public/like.svg'
import styles from './CardNotLike.module.scss';

interface INotLike {
  like: boolean;
  isLike: boolean;
  setLike: (isLike: boolean) => void;
};


const CardNotLike :FC<INotLike> = ({ isLike, setLike, like }) => {

  const handlerLike = () => {
    setLike(!isLike);
    return like = false;
  };
 
  return (
    <Image
      className={styles.icon}
      onClick={handlerLike}
      src={icon_notLike}
      alt={"icon_notLike"}
      width={40}
      height={40}
    />
  );
};

export default CardNotLike;