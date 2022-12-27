import React, { FC } from 'react';
import Image from 'next/image';
import icon_notLike from '../../../../public/like.svg'
import styles from './CardNotLike.module.scss';

interface INotLike {
  id:number;
  isLike: boolean;
  setLike: (isLike: boolean) => void;
  countArr: any;
  setCountArr: any;
};


const CardNotLike:FC<INotLike> = ({ 
  isLike, 
  setLike, 
  countArr, 
  setCountArr, 
  id
}) => {

  const removeId = (id: number) => {
    setCountArr([...countArr, id]);
    setLike(!isLike);
  };

  return (
    <Image
      className={styles.icon}
      onClick={()=> removeId(id)}
      src={icon_notLike}
      alt={"icon_notLike"}
      width={40}
      height={40}
    />
  );
};

export default CardNotLike;