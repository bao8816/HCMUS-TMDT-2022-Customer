import axiosClient from "../../shared/axios-client/axiosClient";

const orderApi = {
    getAllOrders: () => {
        return axiosClient.get('/orders');
    },

    getOrderById: (id) => {
        return axiosClient.get(`/orders/${id}`);
    },

    createOrder: (order) => {
        return axiosClient.post('/orders', order);
    },

    cancelOrder: (id) => {
        return axiosClient.put(`/orders/${id}/cancel`);
    }
}

export default orderApi;
