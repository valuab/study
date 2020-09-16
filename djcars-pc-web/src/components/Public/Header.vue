<!--
 * @Author: YJ
 * @Date: 2020-09-07 14:55:31
 * @
# Description: 
-->
<template>
  <div class="headerBody">
    <div class="header">
      <div class="center-body"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  height: 72px;
  background-color: #fff;
  box-shadow: 0 1px 12.87px 0.13px rgba(0, 0, 0, 0.12);
}

@media (min-width: 450px) {
  .center-body {
    position: relative;
    width: 1204px;
    margin: 0 auto;
  }
}

.headerBody {
  width: 100%;
  height: 72px;
}
</style>