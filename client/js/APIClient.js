import HTTPClient from "./HTTPClient.js";

const BASE_API_PATH = '/api';

const upload = (video) => {
    return HTTPClient.post(`${BASE_API_PATH}/upload/video`, video)
}

export default {
    upload
}