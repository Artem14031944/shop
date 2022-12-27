import React, { useState, useEffect } from 'react';
import Card, { IitemCard } from '../../components/Card/Card';
import axios from 'axios';
import styles from './Products.module.scss';
import Comfort from '../Comfort/Comfort';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [countProductm, setCountProduct] = useState(9);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=${countProductm}`)
        .then(({data}) => setProducts(data))
        .catch(err => console.log(err))
    }, []);


    return (
        <div className={styles.products}>
            <Comfort/>
            {products?.map((product: IitemCard) => {
                return (
                    <div key={product.id}>
                        <Card card={product}/>
                    </div>
                )
            })}
        </div>
    );
};

export default Products;