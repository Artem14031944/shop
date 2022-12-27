import React, { useState, useEffect } from 'react';
import Card, { IitemCard } from '../../components/Card/Card';
import axios from 'axios';
import styles from './Products.module.scss';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=9')
        .then(({data}) => setProducts(data))
        .catch(err => console.log(err))
      }, [])


      console.log(products, 'products')

    return (
        <div className={styles.products}>
            {products?.map((product: IitemCard) => <div key={product.id}><Card card={product}/></div>)}
        </div>
    )
}

export default Products