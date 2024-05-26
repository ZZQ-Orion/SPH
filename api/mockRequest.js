import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

const mockRequests = axios.create({
  baseURL: '/mock',
  timeout: 5000
})

// 请求拦截器：发请求之前做的事
// config：配置对象，里面有一个属性很重要，header请求头
mockRequests.interceptors.request.use((config) => {
  // 进度条开始
  nprogress.start()
  return config
})

// 响应拦截器
mockRequests.interceptors.response.use((res) => {
  // 成功的回调函数，
  // 进度条结束
  nprogress.done()
  return res.data
}, () => {
  return Promise.reject(new Error('faile'))
})

export default mockRequests