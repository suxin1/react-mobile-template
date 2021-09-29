// request config 请参考：https://github.com/axios/axios#request-config
import axios from 'axios';
const request = axios.create({
  baseUrl: process.env.BASE_URL || '/',
});
// axios.interceptors.request.use((axiosConfig) => {
//   console.log('axiosConfig', axiosConfig);
//   return axiosConfig;
// });
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }
    const code = error?.response?.data?.errorCode || '';
    // if (code === '401000002005') {
    //   const msg = error?.response?.data?.message || '';
    //   console.log('msg', msg);
    //   window.location.href = `/login`;
    // }
    return Promise.reject(error);
  },
);

export default request;
