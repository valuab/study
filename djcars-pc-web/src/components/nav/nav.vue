<!--
 * @Author: YJ
 * @Date: 2020-10-27 15:55:53
 * @
# Description: 
-->
<template lang="">
<div class='nav'>
    <div v-for="(item,index) in navList" :key="index" @click='nav(index)'>{{item}}</div>
</div>
</template>

<script>
export default {
    name: "nav",
    props: ["tagList"],
    data() {
        return {
            navList: this.tagList,
        };
    },
    methods: {
        /**
         * @name: 
         * @msg: 切换
         * @param {*} index
         * @return {*}
         */
        nav(index) {
            this.$emit('nav', index)
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./nav.scss";
</style>
