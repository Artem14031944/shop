import React from 'react';
import img_room from '../../../public/roomTwo.svg';
import Image from 'next/image';
import styles from './ComfortActionTwo.module.scss';

const ComfortActionTwo = () => {
  return (
    <div className={styles.contaner}>
      <div className={styles.boxAction}>
        <div className={styles.blockfigureAndText}>
          <span>Скидка</span>  
            <div className={styles.figureAction}>
              <p className={styles.figureActionText}>10%</p>
            </div>
        </div>
          <p className={styles.actionText}>
              на периферию <br/>
              для компьютера
          </p>
          <button className={styles.actionBtn}>Выбрать</button>
      </div>
      <Image
        src={img_room}
        alt={'img_room'}
        width={185}
        height={140}
      />
    </div>
  )
}

export default ComfortActionTwo