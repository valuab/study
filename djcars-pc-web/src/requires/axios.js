/*
 * @Author: YJ
 * @Date: 2020-08-12 10:11:54
 * @
# Description: 
 */
import axios from 'axios'

const require = {}
const head = 'ttp://wxapi-beta.djcars.cn'
// get 请求
/**
 * @name: 
 * @param {string} link 链接
 * @param {object} params 参数
 * @return {type} 
 */
require.get = (link,params)=>{
    link = head + link
    axios.get(link,params).then(Response=>{
        return Response
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
    link = head + link
    axios.post(link,params).then(Response=>{
        return Response
    }).catch(error=>{
        return error
    })
}

export default require