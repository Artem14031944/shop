import React, { FC } from 'react';
import Image from 'next/image';
import icon_like from '../../../../public/likeActive.svg'
import styles from './CardLike.module.scss';

interface ILike {
  id:number;
  isLike: boolean;
  setLike: (isLike: boolean) => void;
  countArr: any;
  setCountArr: any;
};


const CardLike: FC<ILike> = ({
  isLike, 
  setLike, 
  countArr, 
  setCountArr, 
  id
}) => {

  const addId = (id: number) => {
    const removeArr = countArr.filter((item: number) => item !== id);
    setCountArr(removeArr);
    setLike(!isLike);
  };

  return (
    <Image
      className={styles.icon}
      onClick={()=> addId(id)}
      src={icon_like}
      alt={"icon_like"}
      width={40}
      height={40}
    />
  );
};

export default CardLike;