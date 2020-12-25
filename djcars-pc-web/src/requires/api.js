/*
 * @Author: YJ
 * @Date: 2020-08-12 10:15:03
 * @
# Description: 
 */
const head = process.env.NODE_ENV === 'production' ? 'http://www.djcars.cn' : 'api'

const api = {}

api.link = {}

/**
 * @name: home //首页
 */

api.link.home = {
    getNewPostList: {
        url: `${head}/index/getNewPostList`,
        text: '首页banner数据'
    },
    getSelectColumnContentList: {
        url: `${head}/index/getSelectColumnContentList`,
        text: '精选栏目'
    },
    getKolList: {
        url: `${head}/index/getKolList`,
        text: '获取大咖'
    },
    getHistoryPostList: {
        url: `${head}/index/getHistoryPostList`,
        text: '获取往期精彩列表'
    },

    getAdList: {
        url: `${head}/index/getAdList`,
        text: '获取横幅广告列表'
    },
    getAdgetSpecialListList: {
        url: `${head}/index/getSpecialList`,
        text: '获取特色栏目列表'
    },
    
    getColumnCategoryList: {
        url: `${head}/index/getColumnCategoryList`,
        text: '获取栏目列表'
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
