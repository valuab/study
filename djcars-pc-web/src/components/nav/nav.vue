<!--
 * @Author: YJ
 * @Date: 2020-10-27 15:55:53
 * @
# Description: 
-->
<template lang="">
<div class='nav'>
    <div v-for="(item,i) in navList" :key="i" :class='index === i?"choice":""' @click='nav(i)'>{{item}}</div>
</div>
</template>

<script>
export default {
    name: "nav",
    props: ["tagList"],
    data() {
        return {
            navList: this.tagList,
            index: 0
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
            if (this.index === index) return
            this.index = index
            this.$emit('nav', index)
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./nav.scss";
</style>
