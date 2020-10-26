<!--
 * @Author: YJ
 * @Date: 2020-08-31 14:33:32
 * @
# Description: 
-->
<template>
<div class="home">
    <div class="home_left">
        <Banner />
        <Selected @contentIds="contentIds" />
        <KolList @url="url" @param="param" />
        <articleList />
    </div>
    <div class="home_right"></div>
</div>
</template>

<script>
// components
import Banner from "@/components/Home/Banner.vue";
import Selected from "@/components/Home/Selected.vue";
import KolList from "@/components/Home/KolList.vue";
import articleList from "@/components/articleList/articleList.vue";
export default {
    name: "Home",
    components: {
        Banner,
        Selected,
        KolList,
        articleList,
    },
    data() {
        return {
            excludeContentIds: new Object(),
            url: this.$axios.api.link.home.getHistoryPostList.url,
            cases: ['ALL', 'IMAGES', 'VIDEO']
        };
    },
    created() {},
    methods: {
        /**
         * @name:
         * @msg: 传递精选id
         */
        contentIds(val) {
            this.excludeContentIds = val;
            this.param = {

            }
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    max-width: 1200px;
    background: #ffffff;
    display: flex;

    .home_left {
        flex: 1;
        margin-right: 24px;
    }

    .home_right {
        width: 282px;
        height: 100px;
    }
}
</style>
