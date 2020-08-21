/*
 * @Author: YJ
 * @Date: 2020-08-11 16:06:55
 * @
# Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入请求模块
import require from './requires/axios'

const app = createApp(App)
app.use(router).use(require).mount('#app')