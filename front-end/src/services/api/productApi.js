import axiosClient from "../../shared/axios-client/axiosClient";

const productApi = {
    getAllProducts: () => {
        return axiosClient.get('/products');
    },

    getProductById: (id) => {
        return axiosClient.get(`/products/${id}`);
    }
}

export default productApi;
