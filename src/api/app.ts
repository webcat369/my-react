import request from './request'

interface ArticleSearch {
  id?:number
}

// 注册
export const RegisterApi = (params:object) => request.post('/register', params)

// 登录
export const LoginApi = (params:object) => request.post('login', params)

// 获取文章列表
export const ArticleListApi = (params?:object) => request.get('/article', params)

// 添加文章
export const ArticleAddApi = (params?:object) => request.post('/article/add', params)

// 查看文章
export const ArticleSearchApi = (params:ArticleSearch) => request.get(`/article/${params.id}`)
