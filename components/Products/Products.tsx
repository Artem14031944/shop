import React, { useState, useEffect } from 'react';
import Card, { IitemCard } from '../../components/Card/Card';
import axios from 'axios';
import styles from './Products.module.scss';
import Comfort from '../Comfort/Comfort';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [countProductm, setCountProduct] = useState(9);


    const newProductArray = products.map((item: IitemCard) => { 
        let product: IitemCard = Object.assign({}, item);
            product.like = false;
            return product;
    });

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=${countProductm}`)
        .then(({data}) => setProducts(data))
        .catch(err => console.log(err))
    }, []);


    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(newProductArray))
    }, [newProductArray]);


    console.log(newProductArray, 'newProductArray')

    return (
        <div className={styles.products}>
            <Comfort/>
            {newProductArray?.map((product: IitemCard) => {
                return (
                    <div key={product.id}>
                        <Card card={product} />
                    </div>
                )
            })}
        </div>
    );
};

export default Products;