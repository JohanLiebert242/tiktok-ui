import axios from 'axios';

//Tạo instance để custom config của axios (VD: custom method get, post, delete,....)
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

console.log(process.env.REACT_APP_BASE_URL);

export const get = async (path, options = {}) => {
    // trước hàm có async -> trả về promise
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
