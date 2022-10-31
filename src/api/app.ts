import request from './request'


// 注册
export const RegisterApi = (params:object) => request.post('/register', params)


// 登录
export const LoginApi = (params:object) => request.post('login', params)


// 获取文章列表
export const ArticleListApi = (params?:object) => request.get('/article', params)
