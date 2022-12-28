import React, { FC } from 'react';
import Image from 'next/image';
import icon_like from '../../../../public/likeActive.svg'
import styles from './CardLike.module.scss';

interface ILike {
  like: boolean;
  isLike: boolean;
  setLike: (isLike: boolean) => void;
};


const CardLike: FC<ILike> = ({ isLike, setLike, like }) => {

  const handlerLike = () => {
    setLike(!isLike);
    return like = true;
  };

  return (
    <Image
      className={styles.icon}
      onClick={handlerLike}
      src={icon_like}
      alt={"icon_like"}
      width={40}
      height={40}
    />
  );
};

export default CardLike;