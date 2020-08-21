<!--
 * @Author: YJ
 * @Date: 2020-08-11 16:33:25
 * @
# Description: 
-->
<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
      msg:'home'
    }
  },
  created(){
    console.log(this.$require)
  }
}
</script>
