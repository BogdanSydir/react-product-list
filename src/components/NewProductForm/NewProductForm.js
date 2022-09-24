import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi"

import {productActions} from "../../redux";
import {productValidator} from "../../validators";

const NewProductForm = ({setFormStatus}) => {
    const dispatch = useDispatch()

    const {reset, register, handleSubmit, formState:{errors}} = useForm({resolver:joiResolver(productValidator)})

    const submit = async (newProduct) => {
        await dispatch(productActions.create({product:newProduct}))
        console.log(newProduct);
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Product name:<input type="text" {...register('name')}/></label></div>
                {errors.name&&<span>{errors.name.message}</span>}
                <div><label>Image URL:<input type="text" {...register('url')}/></label></div>
                {errors.url&&<span>{errors.url.message}</span>}
                <div><label>Count:<input type="number" {...register('count')}/></label></div>
                {errors.count&&<span>{errors.count.message}</span>}
                <div><label>Size height:<input type="text" {...register('height')}/></label></div>
                {errors.height&&<span>{errors.height.message}</span>}
                <div><label>Size width:<input type="text" {...register('width')}/></label></div>
                {errors.width&&<span>{errors.width.message}</span>}
                <div><label>Weight:<input type="number" {...register('weight')}/></label></div>
                {errors.weight&&<span>{errors.weight.message}</span>}
                <button>Add</button>
                <button onClick={() => setFormStatus(false)}>Cancel</button>
            </form>
        </div>
    );
};

export default NewProductForm;