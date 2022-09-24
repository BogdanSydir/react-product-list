import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services/products.service";

const initialState = {
    products: []
}

const getAll = createAsyncThunk(
    'productSlice/getAll',
    async (sort) => {
        const {data} = await productsService.getAll(sort)
        console.log(sort);
        return data
    }
)

const create = createAsyncThunk(
    'create',
    async ({product}) => {
        const {data} = await productsService.create(product)
        return data
    }
)

const deleteById = createAsyncThunk(
    'delete',
    async ({id}) => {
        await productsService.deleteById(id)
        console.log('delete by id method, id:', id)
        return id
    }
)

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.products = action.payload

        },

        [create.fulfilled]: (state, action) => {
            state.products.push(action.payload)

        },
        [deleteById.fulfilled]: (state, action) => {
            const index = state.products.findIndex(product => product.id === action.payload)
            state.products.splice(index, 1)
        }
    }
})

const {
    reducer: productReducer, actions: {}
} = productSlice;

const productActions = {
    getAll,
    create,
    deleteById
}
export {productReducer,productActions}