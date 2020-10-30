<!--
 * @Author: YJ
 * @Date: 2020-10-26 09:48:32
 * @
# Description: 列表
-->
<template>
<div class="articleList">
    <div class="list" v-for="item in articleList" :key="item.id">
        <div class="img">
            <img :src="item.imageUrl" alt="" srcset="">
            <div class="link">{{item.columnContentDtoList[item.columnContentDtoList.lenght - 1].description}}</div>
        </div>
        <div class="msg"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "articleList",
    props: ["url", "param"],
    data() {
        return {
            page: 0, //加载页码
            URL: this.url,
            PARAM: this.param,
            articleList: new Array(),
        };
    },
    created() {
        this.getData();
    },
    methods: {
        /**
         * @name: getData
         * @msg: 获取所需数据
         */
        getData() {
            this.page++
            this.PARAM.page = this.page
            this.$axios.get(this.URL, this.PARAM).then((res) => {
                let {
                    list
                } = res.result;
                this.articleList = this.articleList.concat(list);
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./articleList.scss";
</style>
