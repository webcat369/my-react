import axios from 'axios'


// 配置项
const axiosOPtions = {
  baseURL: '/api',
  timeout: 5000,
}


// 创建一个单例
const instance = axios.create(axiosOPtions)

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})


export default instance
