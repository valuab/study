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
        <KolList />
        <NavTag :tagList='tagList' @nav='nav' />
        <ArticleList :url="url" :param="params[0]" v-if="excludeContentIds.length" />
    </div>
    <div class="home_right"></div>
</div>
</template>

<script>
// components
import Banner from "@/components/Home/Banner.vue";
import Selected from "@/components/Home/Selected.vue";
import KolList from "@/components/Home/KolList.vue";
import NavTag from "@/components/nav/nav.vue";
import ArticleList from "@/components/articleList/articleList.vue";

// mixin
import myMixin from "@/assets/js/test.mixin.js"

export default {
    name: "Home",
    mixins: [myMixin],
    components: {
        Banner,
        Selected,
        KolList,
        NavTag,
        ArticleList,
    },
    data() {
        return {
            url: this.$axios.api.link.home.getHistoryPostList.url,
            params: [{
                    image: null,
                    video: null
                },
                {
                    image: 1,
                    video: 0
                },
                {
                    image: 0,
                    video: 1
                },
            ],
            excludeContentIds: new Array(),
            tagList: ["全部", "图文", "视频"]
        };
    },
    created() {},
    methods: {
        /**
         * @name:
         * @msg: 传递精选id
         */
        contentIds(val) {
            for (let i in this.params) {
                this.params[i].excludeContentIds = val
            }

            console.log(this.params)

            this.excludeContentIds = val
        },
        nav(e) {
            console.log(e)
        }
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
