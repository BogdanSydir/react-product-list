import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./slices";

const rootReducer = combineReducers({
    productsReducer: productReducer
})

const store = configureStore({
    reducer: rootReducer
})
export default store