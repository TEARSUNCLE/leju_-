import axios from 'axios'
import router from '@/router'
import store from '@/store'

// 创建实例
const service = axios.create({
  baseURL: 'http://leju.bufan.cloud/',
  timeout: 5000
})

// 请求拦截
axios.interceptors.request.use((config) => {
  // 发送请求之前做些什么
  return config
},(error)=>{
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((res) => {
  // 对返回的数据做些什么
  console.log(23, res)
  return res
},(error) => {
  // 对响应错误做处理
  return Promise.reject(error)
});

export default service