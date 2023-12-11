import axios from 'axios';
export const axiosSecure = axios.create({
    baseURL: ''
})
const UseAxioSecure = () => {
    return axiosSecure;

};

export default UseAxioSecure;