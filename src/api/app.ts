import request from './request'


// 注册
export const RegisterApi = (params:object) => request.post('/register', params)


// 登录
export const LoginApi = (params:object) => request.post('login', params)
