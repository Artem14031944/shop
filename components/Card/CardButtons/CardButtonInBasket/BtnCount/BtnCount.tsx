import React, { FC } from 'react';
import Image from 'next/image';
import icon_plus from '../../../../../public/plus.svg';
import icon_minus from '../../../../../public/minus.svg';
import styles from './BtnCount.module.scss';

interface ICount {
    count: number;
    setCount: (count: number) => void;
  };

const BtnCount: FC<ICount> = ({count, setCount}) => {
  return (
    <div className={styles.btnCount}>
        <Image
            onClick={() => setCount(count - 1)}
            className={styles.btnMinus}
            src={icon_minus}
            alt={"icon_minus"}
            width={10}
            height={10}
        />
        <p className={styles.textCount}>
            {count < 0 ? 0 : count}
        </p>
        <Image
            onClick={() => setCount(count + 1)}
            className={styles.btnPlust}
            src={icon_plus}
            alt={"icon_plus"}
            width={10}
            height={10}
        />
    </div>
  )
}

export default BtnCount