import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:3000/'
});

const adviceApi = axios.create({
    baseURL: 'https://api.adviceslip.com'
});

const booksApi = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes'
})

export { client, adviceApi, booksApi };