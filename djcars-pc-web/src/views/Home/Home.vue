<!--
 * @Author: YJ
 * @Date: 2020-08-31 14:33:32
 * @
# Description: 
-->
<template>
<div class="home">
    <div class="left">
        <Banner />
        <Selected @contentIds="contentIds" />
        <KolList />
    </div>
    <div class="right"></div>
</div>
</template>

<script>
// components
import Banner from "../../components/Home/Banner.vue";
import Selected from "../../components/Home/Selected.vue";
import KolList from "../../components/Home/KolList.vue";
export default {
    name: "Home",
    components: {
        Banner,
        Selected,
        KolList,
    },
    data() {
        return {
            excludeContentIds: new Object()
        };
    },
    created() {},
    methods: {
        /**
         * @name: 
         * @msg: 传递精选id
         */
        contentIds(val) {
            this.excludeContentIds = val
        }
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    background: #FFFFFF;
    display: flex;

    .left {
        flex: 1;
        margin-right: 24px;
    }

    .right {
        width: 282px;
    }
}
</style>
