import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-19886.cloudfunctions.net/api'
    //'http://localhost:5001/clone-19886/us-central1/api'
});

export default instance;