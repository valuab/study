/*
 * @Author: YJ
 * @Date: 2020-09-07 10:27:40
 * @
# Description: 配置拦截器
 */
import axios from 'axios'

// 发送请求
axios.interceptors.request.use(function (config){
    console.log(config)
    consfig.headers.sessinId = getToken()
    return config
},function(error){
    return Promise.reject(error)
})

// 处理响应
axios.interceptors.response.use(function (response){
    console.log(response)
    return response
},function(error){
    return Promise.reject(error)
})