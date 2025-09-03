import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

const useAxiosInstance = () => {
  axiosInstance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error); // <-- fixed
    }
  );

  return axiosInstance;
};

export default useAxiosInstance;
