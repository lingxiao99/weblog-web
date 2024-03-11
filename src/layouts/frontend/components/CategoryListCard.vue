<template>
  <div v-if="categories.length > 1" class="w-full p-5 mb-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">

    <!-- 分类标题 -->
    <div class="flex mb-3">
      <h2 class="flex items-center mb-2 font-bold text-gray-900 uppercase dark:text-white">
        <!-- inline icon w-4 h-4 mr-2 -->
        <svg t="1699337632192" class="inline icon w-4 h-4 mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4399" width="200" height="200">
          <path d="M336.457143 336.457143m-336.457143 0a336.457143 336.457143 0 1 0 672.914286 0 336.457143 336.457143 0 1 0-672.914286 0Z" fill="#8CF6FB" p-id="4400"></path>
          <path
            d="M343.771429 468.114286h-219.428572C55.588571 468.114286 0 412.525714 0 343.771429v-219.428572C0 55.588571 55.588571 0 124.342857 0h219.428572C412.525714 0 468.114286 55.588571 468.114286 124.342857v219.428572c0 68.754286-55.588571 124.342857-124.342857 124.342857zM124.342857 73.142857C96.548571 73.142857 73.142857 96.548571 73.142857 124.342857v219.428572C73.142857 371.565714 96.548571 394.971429 124.342857 394.971429h219.428572c27.794286 0 51.2-23.405714 51.2-51.2v-219.428572C394.971429 96.548571 371.565714 73.142857 343.771429 73.142857h-219.428572z m775.314286 394.971429h-219.428572c-68.754286 0-124.342857-55.588571-124.342857-124.342857v-219.428572C555.885714 55.588571 611.474286 0 680.228571 0h219.428572C968.411429 0 1024 55.588571 1024 124.342857v219.428572c0 68.754286-55.588571 124.342857-124.342857 124.342857z m-219.428572-394.971429C652.434286 73.142857 629.028571 96.548571 629.028571 124.342857v219.428572c0 27.794286 23.405714 51.2 51.2 51.2h219.428572c27.794286 0 51.2-23.405714 51.2-51.2v-219.428572C950.857143 96.548571 927.451429 73.142857 899.657143 73.142857h-219.428572z m-336.457142 950.857143h-219.428572C55.588571 1024 0 968.411429 0 899.657143v-219.428572C0 611.474286 55.588571 555.885714 124.342857 555.885714h219.428572c68.754286 0 124.342857 55.588571 124.342857 124.342857v219.428572c0 68.754286-55.588571 124.342857-124.342857 124.342857z m-219.428572-394.971429C96.548571 629.028571 73.142857 652.434286 73.142857 680.228571v219.428572C73.142857 927.451429 96.548571 950.857143 124.342857 950.857143h219.428572c27.794286 0 51.2-23.405714 51.2-51.2v-219.428572c0-27.794286-23.405714-51.2-51.2-51.2h-219.428572z"
            fill="#3C2DCB" p-id="4401"></path>
          <path
            d="M789.942857 1024c-128.731429 0-234.057143-105.325714-234.057143-234.057143s105.325714-234.057143 234.057143-234.057143 234.057143 105.325714 234.057143 234.057143-105.325714 234.057143-234.057143 234.057143z m0-394.971429c-89.234286 0-160.914286 71.68-160.914286 160.914286s71.68 160.914286 160.914286 160.914286 160.914286-71.68 160.914286-160.914286-71.68-160.914286-160.914286-160.914286z"
            fill="#D098FF" p-id="4402"></path>
        </svg>

        分类
      </h2>

      <span class="grow"></span>

      <!-- 查看更多 -->
      <a @click="router.push('/category/list')" class=" bg-gray-100 flex items-center px-2.5 py-1 text-xs font-medium text-center 
            text-gray-900  rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 
            dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-700
             dark:focus:ring-gray-700">
        <svg class="w-[7px] h-[7px] text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </a>

    </div>

    <!-- 分类列表 -->
    <div class="text-sm flex flex-wrap gap-3 font-medium text-gray-600 rounded-lg dark:border-gray-600 dark:text-white">
      <a @click="goCategoryArticleListPage(category.id, category.name)" v-for="(category, index) in categories" :key="index" class="cursor-pointer inline-flex items-center px-3 py-1.5 text-xs font-medium text-center border rounded-lg 
hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 
dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700 dark:hover:text-white">
        {{ category.name }}
        <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-sky-800 bg-sky-200 rounded-full">
          {{ category.articlesTotal }}
        </span>
      </a>

    </div>
  </div>
</template>

<script setup>
import { getCategoryList } from '@/api/frontend/category'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

//引入路由
const router = useRouter()

// 一次显示的分类数
const size = ref(10)

getCategoryList({ size: size.value }).then((res) => {
  if (res.success) {
    categories.value = res.data
  }
})

// 所有分类
const categories = ref([])
// getCategoryList().then((res) => {
//   if (res.success) {
//     categories.value = res.data
//   }
// })

//跳转分类文章列表页
const goCategoryArticleListPage = (id, name) => {
  router.push({ path: '/category/article/list', query: { id, name } })
}
</script>
