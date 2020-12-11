<!--
 * @Author: YJ
 * @Date: 2020-09-07 17:09:25
 * @
# Description: 
-->
<template>
<div class="banner">
    <!-- 图片 -->
    <div class="anchor" ref="anchors" @click="nato">
        <img v-for="item in bannerList" :key="item.id" :src="item.imageUrl" alt srcset class="poster" />
    </div>
    <!-- 文字 -->
    <div class="anchorText">
        <div class="title" ref="title">
            <div class="text" v-for="(item,i) in bannerList" :key="item.id" :class="(serial === i?'moveIndex':'')">
                {{ item.title }}
            </div>
        </div>
        <div class="tab">
            <div v-for="(item,i) in bannerList" :key="item.id" :class="(serial === i?'moveIndex':'')"></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Banner",
    data() {
        return {
            bannerList: new Array(),
            serial: 1,
        };
    },
    created() {
        // 获取轮播图设置
        this.getData();
    },
    update() {
        console.log("update");
    },
    methods: {
        /**
         * @name: getData
         * @msg: 获取所需数据
         */
        async getData() {
            await this.getBannerList();
        },
        /**
         * @name:getBannerList
         * @msg: 获取海报列表数据
         */
        async getBannerList() {
            const link = this.$axios.api.link.home.getNewPostList.url;
            return this.$axios.get(link).then((res) => {
                let {
                    list
                } = res.result;
                list[list.length] = list[0]; //作为动画过渡
                this.bannerList = this.bannerList.concat(list);
                this.autoLoop();
            });
        },

        // 轮播
        autoLoop() {
            setInterval(() => {
                this.autoLoopImg();
                this.autoLoopText();
                this.serial++;
            }, 3000);
        },
        // 图片轮播
        autoLoopImg() {
            this.$refs.anchors.style.transition = "all 0.5s linear";
            this.$refs.anchors.style.left = -894 * this.serial + "px";

            if (parseInt(this.$refs.anchors.style.left) <= -894 * 4) {
                setTimeout(() => {
                    //这个setTimeout是因为left=-600px，transition有0.5s执行动画，需要等它执行完成后，再设置left=0，
                    //否则，直接跳到left=0,动画生硬，
                    this.$refs.anchors.style.left = 0 + "px";
                    this.$refs.anchors.style.transition = "all 0s linear";
                    this.serial = 1;
                }, 500);
            }
        },
        // 文字轮播
        autoLoopText() {
            this.$refs.title.style.transition = "all 0.5s linear";
            this.$refs.title.style.top = -75 * this.serial + "px";

            if (parseInt(this.$refs.title.style.top) <= -75 * 4) {
                setTimeout(() => {
                    //这个setTimeout是因为left=-600px，transition有0.5s执行动画，需要等它执行完成后，再设置left=0，
                    //否则，直接跳到left=0,动画生硬，
                    this.$refs.title.style.top = 0 + "px";
                    this.$refs.title.style.transition = "all 0s linear";
                }, 500);
            }
        },
        /**
         * @name: getColumnCategoryList
         * @msg: 获取栏目列表
         */
        async getColumnCategoryList() {
            // const api = this.$axios.api.link.home.getNewPostList.url
            const api = this.$axios.api.link.home.getColumnCategoryList.url;
            console.log(api);
            let data = {
                categoryId: 6,
            };
            this.$axios.get(api, data).then((res) => {
                console.log(res);
            });
        },

        nato() {
            // 切换页面
            this.$router.replace({
                path: 'video'
            })
        }
    },
};
</script>

<style lang="scss" scoped>
@import './Banner.scss';
</style>
