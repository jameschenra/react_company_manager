
const isProduction = import.meta.env.PROD
const isDevelopment = !isProduction

const CONFIG = {
  isProduction,
  isDevelopment,
  // 路由 basename
  baseURL: '/',
  // 网页标题
  title: 'Test Work',
  http: {
    baseURL: isDevelopment
      ? 'http://localhost:7003/api'
      : 'https://server.com/api'
  },
}

export default CONFIG
