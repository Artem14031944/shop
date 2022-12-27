import { FC } from 'react';
import styles from './CardDescription.module.scss';

interface IAbout {
    description: string
}

const CardDescription:FC<IAbout> = ({description}) => {
  return (
    <div className={styles.description}>{description}</div>
  )
};

export default CardDescription;