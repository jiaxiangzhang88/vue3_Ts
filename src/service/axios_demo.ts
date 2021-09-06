import axios from 'axios'

//模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })
//get请求并传入参数
axios
  .get('http://123.207.32.32:8000/home/multidata', {
    params: {
      name: 'zjx',
      age: 18
    }
  })
  .then((res) => {
    console.log(res)
  })

//axios的配置选项
// axios.defaults.baseURL = 'http://httpbin.org'
// axios.defaults.timeout = 1000
// axios.defaults.headers ={}
// axios
//   .get('/get', {
//     params: {
//       name: 'zjx',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })
//axios.all 多个请求，一起返回
// axios
//   .all([
//     axios.get('/get', { params: { name: 'why', age: 18 } }),
//     axios.post('/post', { data: { name: 'why', age: 18 } })
//   ])
//   .then((res) => {
//     console.log(res[0].data)
//   })

//axios的拦截器
//fn1：请求成功会执行的函数
//fn2:请求失败会执行的函数
axios.interceptors.request.use(
  (config) => {
    //1.给请求添加token
    //2.isLoading动画
    console.log('请求成功的拦截')
    return config
  },
  (err) => {
    console.log('请求失败')
    return err
  }
)
//
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)
