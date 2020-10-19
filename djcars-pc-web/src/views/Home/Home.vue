<!--
 * @Author: YJ
 * @Date: 2020-08-31 14:33:32
 * @
# Description: 
-->
<template>
  <div class="home">
    <Banner/>
    <Selected/>
  </div>
</template>

<script>
// components
import Banner from "../../components/Home/Banner.vue";
import Selected from "../../components/Home/Selected.vue";
export default {
  name: "Home",
  components: {
    Banner,
    Selected
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
</style>
