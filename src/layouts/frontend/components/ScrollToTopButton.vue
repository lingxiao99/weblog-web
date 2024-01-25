<template>
  <!-- fixed 固定位置，并通过 bottom-xx right-xx 设置在右下角 -->

  <div v-show="showScrollToTopBtn" style="margin-bottom: 52px;"
    class="  border  cursor-pointer fixed bottom-2 right-2 md:bottom-10 md:right-10 inline p-3 bg-white hover:bg-gray-100 rounded dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700">
    <svg t="1699408303888" class="icon w-6 h-6 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12879" width="200" height="200">
      <path
        d="M673.1776 480.4608l270.165333-263.543467C950.9888 224.494933 955.733333 235.008 955.733333 246.6816l0 530.602667c0 11.025067-4.3008 20.957867-11.229867 28.433067L673.1776 480.4608zM82.1248 215.688533C89.4976 208.9984 99.157333 204.8 109.8752 204.8l804.283733 0c10.717867 0 20.3776 4.1984 27.7504 10.888533L512 553.8816 82.1248 215.688533zM79.496533 805.751467C72.567467 798.276267 68.266667 788.343467 68.266667 777.284267L68.266667 246.6816c0-11.6736 4.744533-22.186667 12.3904-29.7984l270.165333 263.543467L79.496533 805.751467zM512 637.678933l112.810667-110.045867 317.8496 280.029867C935.2192 814.762667 925.218133 819.2 914.1248 819.2L109.8752 819.2c-11.0592 0-21.060267-4.437333-28.535467-11.537067l317.8496-280.029867L512 637.678933z"
        p-id="12880"></path>
    </svg>
  </div>
  <div v-show="showScrollToTopBtn" @click="scrollToTop"
    class="   border  cursor-pointer fixed bottom-2 right-2 md:bottom-10 md:right-10 inline p-3 bg-white hover:bg-gray-100 rounded dark:bg-gray-800 dark:hover:bg-gray-900 dark:border-gray-700">
    <svg t="1699408003976" class="icon w-6 h-6" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10992" width="200" height="200">
      <path d="M512 512m-488.1 0a488.1 488.1 0 1 0 976.2 0 488.1 488.1 0 1 0-976.2 0Z" fill="#4552FF" p-id="10993"></path>
      <path
        d="M740.8 272.5H283.2c-16.6 0-30-13.4-30-30s13.4-30 30-30h457.6c16.6 0 30 13.4 30 30s-13.4 30-30 30zM512 821.1c-33.1 0-60-26.9-60-60V506.9c0-33.1 26.9-60 60-60s60 26.9 60 60v254.2c0 33.2-26.9 60-60 60z"
        fill="#FFFFFF" p-id="10994"></path>
      <path d="M720.5 557.8h-417l0.4-2.3 203.3-203.3h8.3l203.4 203.3" fill="#FFFFFF" p-id="10995"></path>
      <path
        d="M720.5 587.8h-417c-8.7 0-17-3.8-22.7-10.3-5.7-6.6-8.3-15.3-7-23.9l0.3-2.2c0.9-6.4 3.9-12.4 8.5-17L486 330.9c5.6-5.6 13.3-8.8 21.2-8.8h8.3c8 0 15.6 3.2 21.2 8.8l203.4 203.4c1.5 1.5 2.9 3.2 4 4.9 4 5.1 6.4 11.5 6.4 18.5 0 16.6-13.5 30.1-30 30.1z m-346.4-60h274.6L511.4 390.5 374.1 527.8z"
        fill="#FFFFFF" p-id="10996"></path>
    </svg>
  </div>

</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 是否展示返回顶部按钮
const showScrollToTopBtn = ref(false)

// 添加滚动监听
onMounted(() => window.addEventListener('scroll', handleScroll))

// 移除滚动监听
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

const handleScroll = () => {
  // 如果页面滚动超过300px，显示回到顶部按钮，否则隐藏
  showScrollToTopBtn.value = window.scrollY > 300
}

// 滚动到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0, // 距离顶部位置
    behavior: 'smooth', // 平滑滚动效果
  })
}
</script>