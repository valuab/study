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

    <div class="limit">
        <div class="list" ref="kol">
            <a href="" class="item" v-for="item in kolList" :key="item.id">
                <img :src="item.imageUrl" class="kol" alt="" />
                <div class="msg">
                    <div class="bg" />
                    <div class="item-text1">{{ item.nickname }}</div>
                    <div class="item-text2">{{ item.introduction }}</div>
                    <div class="item-text3">
                        {{ item.cylOtherCount }}图文·{{ item.cylVideoCount }}视频
                    </div>
                </div>
            </a>
        </div>
        <div class="left" :class="page === 0 ? 'img-person-kol-left' : 'img-person-kol-left1'" @click="prev"></div>
        <div class="right" :class="page === (this.maxPage - 1) ? 'img-person-kol-right' : 'img-person-kol-right1'" @click="next"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "KolList",
    data() {
        return {
            kolList: new Object(),
            page: 0,
            maxPage: 0,
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

                this.maxPage = Math.ceil(list.length / 3)
            });
        },

        prev() {
            if (this.page <= 0) return
            this.page--
            this.$refs.kol.style.left = this.page * -894 + 'px'
        },
        next() {
            if (this.page >= this.maxPage - 1) return
            this.page++
            this.$refs.kol.style.left = this.page * -894 + 'px'
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./KolList.scss";
</style>
