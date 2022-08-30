import axiosClient from "../../shared/axios-client/axiosClient";

const authApi = {
    // sign in using passport js
    signIn: (username, password) => {
        return axiosClient.post('/signin/password', {
            username,
            password
        });
    },

    signUp: (email, password, name, image) => {
        return axiosClient.post('/signup', {
            email,
            password,
            name,
            image
        });
    }
}

export default authApi;
