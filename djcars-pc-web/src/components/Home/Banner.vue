<!--
 * @Author: YJ
 * @Date: 2020-09-07 17:09:25
 * @
# Description: 
-->
<template>
  <div class="banner">
    <block :for="bannerList" :key="this">
      <img src="item.imageUrl" alt srcset class="poster" />
    </block>
  </div>
</template>

<script>
import './Banner.scss'
export default {
    name:'Banner',
    data(){
        return{
            bannerList:new Array()
        }
    },
    created(){
        // 获取轮播图设置
        this.getBannerList()
    },
    methods:{
        /**
         * @name: getBannerList
         * @msg: 获取海报封面
         * @param {type} 
         * @return {type} 
         */
        async getBannerList(){
            const api = this.$axios.api.link.home.getNewPostList.url
            console.log(api)
            this.$axios.get(api)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>