<template>
  <div class="main min-h-screen flex flex-col">
    <WikiHeader></WikiHeader>
    <main class="grow container max-w-screen-3xl mx-auto px-4 sm:px-6 md:px-8 py-4">
      <!-- 左边栏 -->
      <div class="bg-red-500 hidden lg:block fixed z-20 inset-0 top-[5.5rem] 
                left-[max(0px,calc(50%-45rem))] right-auto w-[19rem] pb-10 pl-8 pr-6 overflow-y-auto">
        左边栏
      </div>
      <!-- 中间栏 -->
      <div class="bg-green-500 lg:pl-[22.5rem]">
        <div class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
          中间栏中间栏中间栏中间栏中间栏
        </div>
      </div>
      <!-- 右边栏 -->
      <div class="bg-yellow-500 fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
        右边栏
      </div>
    </main>
    <WikiFooter></WikiFooter>
  </div>
</template>
<script setup>
import WikiHeader from '@/layouts/frontend/components/WikiHeader.vue'
import WikiFooter from '@/layouts/frontend/components/WikiFooter.vue'
</script>   
<style scoped>
/* 背景色设置为白色 */
.main {
  background-color: #f4f4f4;
}
</style>