

<template>
  <!-- 设置语言为中文 -->
  <el-config-provider :locale="locale">
    <div class="flex flex-col min-h-screen">
      <router-view></router-view>
    </div>
  </el-config-provider>

</template>

<script setup>
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const locale = zhCn
</script>

<style scoped>
/* 自定义顶部加载 Loading 颜色 */
#nprogress .bar {
  background: #1aa2e6 !important;
}
</style>
<style >
/* 暗黑模式 body 背景色 */
.dark body {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

/*body {
  color: #000;
  background: url(./assets/2.png) fixed;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 101%;
}*/
</style>
