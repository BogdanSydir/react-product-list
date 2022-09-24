import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Products.module.css'
import {productActions} from "../../redux";
import Product from "../Product/Product";
import NewProductForm from "../NewProductForm/NewProductForm";



const Products = () => {

    const {products} = useSelector(state => state.productsReducer)

    const [formStatus, setFormStatus] = useState(false);

    const options = [
        {value: '', text: '--Choose an option--'},
        {value: 'name', text: 'Name'},
        {value: 'count', text: 'Count'},
        {value: 'weight', text: 'Weight'},
    ];
    const [sort, setSort] = useState('name,count')
    const handleChange = event => {
        setSort(event.target.value)
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getAll(sort))
    }, [sort])
    return (
        <div>
            {!formStatus && <button onClick={() => setFormStatus(true)}>add new product</button>}
            {formStatus && <NewProductForm setFormStatus={setFormStatus}/>}
            {<label>Sort by:
                <select id="sort" defaultValue={'name'} onChange={handleChange}>
                    {options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </label>}
            <div className={css.background}>
                {products.map(product => <Product key={product.id} product={product}/>)}
            </div>
        </div>
    );
};

export default Products;