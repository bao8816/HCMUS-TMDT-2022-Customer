import axiosClient from "../../shared/axios-client/axiosClient";

const paymentApi = {
    createPayment: (order) => {
        return axiosClient.post('/payments', order);
    },

    successPayment: () => {
        return axiosClient.get('/payments/success');
    },

    cancelPayment: () => {
        return axiosClient.get('/payments/cancel');
    }
}

export default paymentApi;
