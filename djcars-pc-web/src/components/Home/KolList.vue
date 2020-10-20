<!--
 * @Author: YJ
 * @Date: 2020-10-20 11:58:05
 * @
# Description: 
-->
<template>
<div class="KolList">
    <div class="home_title">
        <div class="title_name">精选节目</div>
        <a class="title_guide"> 更多 ></a>
    </div>
    <div class="list">
        <a href="" class="item" v-for="item in kolList" :key="item.id">
            <img :src="item.imageUrl" class="kol" alt="" />
            <div class="bg">
                <div class="item-textBox-text1">{{ item.nickname }}</div>
                <div class="item-textBox-text2">{{ item.introduction }}</div>
                <div class="item-textBox-text3">
                    {{ item.cylOtherCount }}图文·{{ item.cylVideoCount }}视频
                </div>
            </div>
        </a>
    </div>
</div>
</template>

<script>
export default {
    name: "KolList",
    data() {
        return {
            kolList: new Object(),
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
        async getData() {
            await this.getKolList();
        },
        /**
         * @name: getKolList
         * @msg: 获取海报封面
         */
        async getKolList() {
            const api = this.$axios.api.link.home.getKolList.url;
            this.$axios.get(api).then((res) => {
                let {
                    list
                } = res.result;
                this.kolList = list;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./KolList.scss";
</style>
