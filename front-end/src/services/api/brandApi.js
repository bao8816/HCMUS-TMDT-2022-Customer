import axiosClient from "../../shared/axios-client/axiosClient";

const brandApi = {
    getAllBrands: () => {
        return axiosClient.get('/brands');
    },

    getBrandById: (id) => {
        return axiosClient.get(`/brands/${id}`);
    }
}

export default brandApi;
