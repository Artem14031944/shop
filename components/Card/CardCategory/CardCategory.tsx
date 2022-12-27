import { FC } from 'react';
import styles from './CardCategory.module.scss';


interface ICategory {
    category: string
}

const CardCategory: FC<ICategory> = ({category}) => {
  return (
    <div className={styles.category}>{category}</div>
  )
};

export default CardCategory;