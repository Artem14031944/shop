import React from 'react';
import img_room from '../../../assets/icon/roomOne.svg';
import Image from 'next/image';
import styles from './ComfortActionOne.module.scss';

const ComfortActionOne = () => {
  return (
    <div className={styles.contaner}>
        <Image
            src={img_room}
            alt={'img_room'}
            width={185}
            height={140}
        />
        <div className={styles.boxAction}>
            <div className={styles.figureAction}>
                <p className={styles.figureActionText}>- 25%</p>
            </div>
            <p className={styles.actionText}>
                на товары <br/>
                для кабинета
            </p>
            <button className={styles.actionBtn}>Выбрать</button>
        </div>
    </div>
  )
};

export default ComfortActionOne;