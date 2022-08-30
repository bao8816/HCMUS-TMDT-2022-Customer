import axiosClient from "../../shared/axios-client/axiosClient";

const categoryApi = {
    getAllCategories: () => {
        return axiosClient.get('/categories');
    },

    getCategoryById: (id) => {
        return axiosClient.get(`/categories/${id}`);
    }
}

export default categoryApi;
