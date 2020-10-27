<!--
 * @Author: YJ
 * @Date: 2020-10-26 09:48:32
 * @
# Description: 列表
-->
<template>
<div class="articleList">
    <div class="list"></div>
</div>
</template>

<script>
export default {
    name: "articleList",
    props: ['url', 'param'],
    data() {
        return {
            page: 0, //加载页码
            URL: this.url,
            PARAM: this.param,
        };
    },
    created() {

    },
    methods: {
        /**
         * @name: getData
         * @msg: 获取所需数据
         */
        getData() {},
    },
};
</script>

<style lang="scss" scoped>
@import "./articleList.scss";
</style>
