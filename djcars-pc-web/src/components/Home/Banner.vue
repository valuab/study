<!--
 * @Author: YJ
 * @Date: 2020-09-07 17:09:25
 * @
# Description: 
-->
<template>
    <div class="banner">
        <block :for="bannerList" :key="this">

        </block>
    </div>
</template>

<script>
export default {
    name:'Banner',
    data(){
        return{
            bannerList:new Array()
        }
    },
    created(){
        // 获取轮播图设置
    }
}
</script>

<style lang="scss" scoped>
    
</style>