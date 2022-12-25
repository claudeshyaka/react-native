import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';



const instance = axios.create({
    baseURL: 'http://b85e-105-178-114-39.ngrok.io'
});


instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        console.log("TOKEN", token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        }
        // throw new instance.Cancel('No token!');

    },
    (err) => {
        console.log(err);
        return Promise.reject(err);
    }
);

export default instance;