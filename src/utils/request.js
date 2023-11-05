// Công cụ giúp tạo ra những request
import axios from 'axios';
// console.log(process.env);
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// tránh trường hợp data.data
export const get = async (path, options = {}) => {
    // thay vì sử dụng request.get ở hàm gọi api thì chúng ta sử dụng hàm này để nhận reponse.data
    const respone = await request.get(path, options);
    return respone.data;
};

export default request;
