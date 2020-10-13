/*
 * @Author: YJ
 * @Date: 2020-08-12 10:15:03
 * @
# Description: 
 */
const head = 'api'

const api = {}

api.link = {}

/**
 * @name: home //首页
 */

api.link.home = {
    getAdList: {
        url: `${head}/index/getAdList`,
        text: '获取横幅广告列表'
    },
    getAdgetSpecialListList: {
        url: `${head}/index/getSpecialList`,
        text: '获取特色栏目列表'
    },
    getKolList: {
        url: `${head}/index/getKolList`,
        text: '获取特色栏目列表'
    },
    getColumnCategoryList: {
        url: `${head}/index/getColumnCategoryList`,
        text: '获取栏目列表'
    },
    getNewPostList: {
        url: `${head}/index/getNewPostList`,
        text: '获取最新发布列表'
    },
    getHistoryPostList: {
        url: `${head}/index/getHistoryPostList`,
        text: '获取往期精彩列表'
    },
    searchHotKeyWordList: {
        url: `${head}/index/searchHotKeyWordList`,
        text: '搜索全部帖子列表'
    },
    getConfigInfo: {
        url: `${head}/index/getConfigInfo`,
        text: '获取视频配置'
    },
    getAllKolPostList: {
        url: `${head}/index/getAllKolPostList`,
        text: '全部kol出品帖子'
    },
    getNewAllKolDynamicList: {
        url: `${head}/index/getNewAllKolDynamicList`,
        text: '全部kol动态帖子'
    },
    getAllKolQaList: {
        url: `${head}/index/getAllKolQaList`,
        text: '获取kol问答列表'
    },
    getRecommendKolList: {
        url: `${head}/index/getRecommendKolList`,
        text: '获取kol问答列表'
    },
}

export default api
