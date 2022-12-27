import React from 'react';
import ComfortTtitle from './ComfortTtitle/ComfortTtitle';
import ComfortActionOne from './ComfortActionOne/ComfortActionOne';
import ComfortActionTwo from './ComfortActionTwo/ComfortActionTwo';
import styles from './Comfort.module.scss';

const Comfort = () => {
  return (
    <div className={styles.container}>
       <ComfortTtitle/>
       <ComfortActionOne/>
       <ComfortActionTwo/>
    </div>
  )
};

export default Comfort;