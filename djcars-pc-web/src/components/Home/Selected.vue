<!--
 * @Author: YJ
 * @Date: 2020-10-16 14:36:11
 * @
# Description: 
-->
<template>
<div class="Selected">
    <div class="home_title">
        <div class="title_name">精选节目</div>
        <a class="title_guide"> 更多 ></a>
    </div>
    <div class="template">
        <div class="column">
            <img :src="firstList.postImageUrl" alt="" srcset="" />
            <div class="article_tag">
                {{ firstList.columnDescription }}
            </div>
            <div class="article_title">{{ firstList.title }}</div>
            <div class="article_article">
                {{ firstList.postDesc }}
            </div>
        </div>
        <div class="column">
            <div class="table" v-for="item in SelectColumnContentList" :key="item.id">
                <img :src="item.postImageUrl" alt="" srcset="" />
                <div class="article_tag">
                    {{ item.columnDescription }}
                </div>
                <div class="article_title">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "Selected",
    data() {
        return {
            SelectColumnContentList: new Array(),
            firstList: new Object()
        };
    },
    created() {
        this.getData();
    },
    methods: {
        /**
         * @name: getData
         * @msg: 获取数据
         */
        getData() {
            const link = this.$axios.api.link.home.getSelectColumnContentList.url;
            return this.$axios.get(link).then((res) => {
                console.log(res)
                let {
                    list,
                    excludeContentIds
                } = res.result;
                this.firstList = list[0];
                this.SelectColumnContentList = this.SelectColumnContentList.concat(
                    list.splice(0, 4)
                );

                this.$emit('contentIds', excludeContentIds)
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import "./Selected.scss";
</style>
