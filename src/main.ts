import { createApp } from 'vue'

import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
// import './service/axios_demo'
//全局引入
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

const app = createApp(App)

app.use(globalRegister)

app.use(store)
setupStore()
app.use(router)

// app.use(ElementPlus)
app.mount('#app')

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
