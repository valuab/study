/*
 * @Author: YJ
 * @Date: 2020-08-12 10:11:54
 * @
# Description: 
 */
import axios from './interceptors'
import api from './api.js'
const require = {}

// 接口目录
require.api = api

// get 请求
/**
 * @name: 
 * @param {string} url 链接
 * @param {object} params 参数
 * @return {type} 
 */
require.get = (url,params)=>{
    return axios({
        method:'get',
        url,
        params
    }).then(Response=>{
        return Response.data
    }).catch(error=>{
        return error
    })
}


// post 请求
/**
 * @name: 
 * @param {string} link 链接
 * @param {object} params 参数
 * @return {type} 
 */
require.post = (link,params)=>{
    return axios({
        method:'post',
        url,
        params,
        timeout: 10000,
    }).then(Response=>{
        return Response.data
    }).catch(error=>{
        return error
    })
}

export default require