import {axiosService} from "./axios.service";
import {urls} from "../constants";

const productsService = {
    getAll:(sort) => axiosService.get(`${urls.products}?_sort=${sort}`),
    create:(product) => axiosService.post(urls.products, product),
    deleteById:(id) => axiosService.delete(`${urls.products}/${id}`)
}

export {productsService}