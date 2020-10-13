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
        this.getData()
    },
    methods:{
        /**
         * @name: getData
         * @msg: 获取所需数据
         */
        async getData(){
          this.getKolList()
          this.getColumnCategoryList()
        },
        /**
         * @name: getKolList
         * @msg: 获取海报封面
         */
        async getKolList(){
            // const api = this.$axios.api.link.home.getNewPostList.url
            const api = this.$axios.api.link.home.getKolList.url
            console.log(api)
            let data = {
              // categoryId:6
            }
            this.$axios.get(api,data).then(res=>{
              console.log(res)
            })
        },
        /**
         * @name: getColumnCategoryList
         * @msg: 获取栏目列表
         */
        async getColumnCategoryList(){
            // const api = this.$axios.api.link.home.getNewPostList.url
            const api = this.$axios.api.link.home.getColumnCategoryList.url
            console.log(api)
            let data = {
              categoryId:6
            }
            this.$axios.get(api,data).then(res=>{
              console.log(res)
            })
        },

    }
}
</script>

<style lang="scss" scoped>
</style>