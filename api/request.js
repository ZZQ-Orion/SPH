import axios from 'axios'
// 引入进度条
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// 引入仓库（用于传递uuid,uuid写在了大仓库里面的detail小仓库）
import store from '@/store'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器：发请求之前做的事
// config：配置对象，里面有一个属性很重要，header请求头
requests.interceptors.request.use((config) => {
  // 将token通过请求头发给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  // 进度条开始
  nprogress.start()
  // 传uuid
  if (store.state.detail.uuid_token) {
    config.headers.userTempId = store.state.detail.uuid_token
  }
  return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 成功的回调函数，
  // 进度条结束
  nprogress.done()
  return res.data
}, () => {
  return Promise.reject(new Error('faile'))
})

export default requests
