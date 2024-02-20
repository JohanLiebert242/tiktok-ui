import axios from 'axios';

//Tạo instance để custom config của axios (VD: custom method get, post, delete,....)
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options={}) => {
    // trước hàm có async -> trả về promise
    const response = await request.get(path, options);
    return response.data
};

export default request;
