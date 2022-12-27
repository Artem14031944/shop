import { FC } from 'react';
import styles from './CardPrice.module.scss';

interface ICategory {
    price: number
}


const CardPrice: FC<ICategory> = ({price}) => {

    const multy = (price: number) => Math.round(price * 70);

    return (
        <div className={styles.price}>
            {multy(price)}₽<span> /шт.</span>
        </div>
    )
};

export default CardPrice;