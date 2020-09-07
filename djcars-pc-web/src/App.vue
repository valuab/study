<!--
 * @Author: YJ
 * @Date: 2020-08-31 13:18:08
 * @
# Description: 
-->
<template>
  <div id="app">
    <div class="isApp" v-if="isApp">
      <router-view />
    </div>
    <div v-if="!isApp">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Public/Header";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      isApp: false,//默认pc端
    };
  },
  created(){
    console.log(navigator.userAgent)
    if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){
      this.data.isApp = true
    }
  }
};
</script>