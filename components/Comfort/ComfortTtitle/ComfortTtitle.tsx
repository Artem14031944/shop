import React from 'react';
import icon_arrow from '../../../public/arrow.svg';
import Image from 'next/image';
import styles from './ComfortTtitle.module.scss';

const ComfortTtitle = () => {
  return (
    <div>
         <h2 className={styles.title}>
            Всё для комфортной<br/>работы
        </h2>
        <Image 
            src={icon_arrow} 
            alt={'arrow'}
            width={40}
            height={16}
        />
    </div>
  )
}

export default ComfortTtitle