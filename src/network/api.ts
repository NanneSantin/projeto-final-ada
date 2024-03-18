import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3000/'
});

const adviceApi = axios.create({
    baseURL: 'https://api.adviceslip.com'
});

export { client, adviceApi };