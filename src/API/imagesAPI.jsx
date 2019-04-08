import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e44adef4932cd7b9a89f6fba22817f347b2eeacaffd9570c25708701ef60077e',
    }
});