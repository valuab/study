/*
 * @Author: YJ
 * @Date: 2020-08-12 10:15:03
 * @
# Description: 
 */
const domain  = 'http://wxapi-beta.djcars.cn'
const api = {}

api.link = {}

/**
 * @name: home //首页
 */

api.link.home = {
    getAdList:{url:"/api/index/getAdList",text:'获取横幅广告列表'},
    getAdgetSpecialListList:{url:"/api/index/getSpecialList",text:'获取特色栏目列表'},
    getKolList:{url:"/api/index/getKolList",text:'获取特色栏目列表'},
    getColumnCategoryList:{url:"/api/index/getColumnCategoryList",text:'获取栏目列表'},
    getNewPostList:{url:"/api/index/getNewPostList",text:'获取最新发布列表'},
    getHistoryPostList:{url:"/api/index/getHistoryPostList",text:'获取往期精彩列表'},
    searchHotKeyWordList:{url:"/api/index/searchHotKeyWordList",text:'搜索全部帖子列表'},
    getConfigInfo:{url:"/api/index/getConfigInfo",text:'获取视频配置'},
    getAllKolPostList:{url:"/api/index/getAllKolPostList",text:'全部kol出品帖子'},
    getNewAllKolDynamicList:{url:"/api/index/getNewAllKolDynamicList",text:'全部kol动态帖子'},
    getAllKolQaList:{url:"/api/index/getAllKolQaList",text:'获取kol问答列表'},
    getRecommendKolList:{url:"/api/index/getRecommendKolList",text:'获取kol问答列表'},
}
