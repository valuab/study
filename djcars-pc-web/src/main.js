/*
 * @Author: YJ
 * @Date: 2020-08-11 16:06:55
 * @
# Description: 
 */
import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router' //router 插件 
// 引入请求模块
import axios from './requires/axios'

// 引入全局样式
import './assets/css/image.scss'
// import './assets/css/app.scss'

const app = createApp(App)

// 注册全局自定义指令 `v-focus`
app.directive('focus', {
    inserted: function (el) {
        el.focus()
    },
})

// 全局混入
app.mixin({
    beforeCreate() {
        console.log('我是全局mixin')
    },
})


// 全局ctx(this) 上挂载 $axios
app.config.globalProperties.$axios = axios

// 注册插件
app.use(router)

app.mount('#app')