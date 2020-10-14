<!--
 * @Author: YJ
 * @Date: 2020-09-07 17:09:25
 * @
# Description: 
-->
<template>
  <div class="banner">
    <div class="anchor" ref="anchor">
      <img
        v-for="item in bannerList"
        :key="item.id"
        :src="item.imageUrl"
        alt
        srcset
        class="poster"
      />
    </div>
  </div>
</template>

<script>
import "./Banner.scss";
export default {
  name: "Banner",
  data() {
    return {
      bannerList: new Array(),
      index: 1,
    };
  },
  created() {
    // 获取轮播图设置
    this.getData();
  },
  update() {
    console.log('update')
    this.autoLoop();
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
     * @name:
     * @msg:
     */
    async getBannerList() {
      const link = this.$axios.api.link.home.getNewPostList.url;
      this.$axios.get(link).then((res) => {
        let { list } = res.result;
        list[list.length] = list[0];
        this.bannerList = this.bannerList.concat(list);
      });
    },

    autoLoop() {
      this.$nextTick(() => {
        setInterval(() => {
          this.$refs.anchor.style.left = -894 * this.index + "px";
          this.$refs.anchor.style.transition = "all 0.5s linear";
          this.index++;

          if (parseInt(this.$refs.anchor.style.left) <= -894 * 4) {
            setTimeout(() => {
              //这个setTimeout是因为left=-600px，transition有0.5s执行动画，需要等它执行完成后，再设置left=0，
              //否则，直接跳到left=0,动画生硬，
              this.$refs.anchor.style.left = 0 + "px";
              this.$refs.anchor.style.transition = "all 0s linear";
              this.index = 1;
            }, 500);
          }
        }, 3000);
      });
    },

    /**
     * @name: getKolList
     * @msg: 获取海报封面
     */
    async getKolList() {
      // const api = this.$axios.api.link.home.getNewPostList.url
      const api = this.$axios.api.link.home.getKolList.url;
      let data = {
        // categoryId:6
      };
      this.$axios.get(api, data).then((res) => {
        console.log(res);
      });
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
  },
};
</script>

<style lang="scss" scoped>
</style>