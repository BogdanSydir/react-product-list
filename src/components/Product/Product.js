import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import css from './Product.module.css'
import {productActions} from "../../redux";


const Product = ({product: {id, name, url, count, height, width, weight}}) => {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const deleteById = async (id) => {
        await dispatch(productActions.deleteById({id}))
    }

    return (
        <div className={css.background}>
            {name && <h2>{name} </h2>}
            {url && <img className={css.image} src={url} alt="image"/>}
            {count && <h5>Count = {count} </h5>}
            {height && <h5>Height = {height} </h5>}
            {width && <h5>Width = {width} </h5>}
            {weight && <h5>Weight = {weight} </h5>}
            {!modal && <button onClick={() => setModal(true)}>Delete</button>}
            {modal && <div>
                <span>Are you sure?</span>
                <button onClick={() => deleteById(id)}>Yes</button>
                <button onClick={() => setModal(setModal(false))}>No</button>
            </div>}
        </div>
    );
};

export default Product;