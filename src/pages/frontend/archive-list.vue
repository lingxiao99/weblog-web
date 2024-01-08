<template>
  <Header></Header>

  <!-- 主内容区域 -->
  <main class="container max-w-screen-xl mx-auto p-4 px-6 admin-container animate__animated animate__fadeInUp">
    <!-- grid 表格布局，分为 4 列 -->
    <div class="grid grid-cols-4 gap-7">
      <!-- 左边栏，占用 3 列 -->
      <div class="col-span-4 md:col-span-3 mb-3">

        <!-- 归档列表 -->
        <div v-for="(archive, index) in archives" :key="index" class="p-5 mb-4 border border-gray-200 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700">
          <time class="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
            <svg t="1699338411024" class="inline icon  w-4 h-4 mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="24379" width="200" height="200">
              <path
                d="M698.368 0m60.643556 0l0.113777 0q60.643556 0 60.643556 60.643556l0 64.512q0 60.643556-60.643556 60.643555l-0.113777 0q-60.643556 0-60.643556-60.643555l0-64.512q0-60.643556 60.643556-60.643556Z"
                fill="#3A77D9" p-id="24380"></path>
              <path
                d="M204.344889 0m60.643555 0l0.113778 0q60.643556 0 60.643556 60.643556l0 64.512q0 60.643556-60.643556 60.643555l-0.113778 0q-60.643556 0-60.643555-60.643555l0-64.512q0-60.643556 60.643555-60.643556Z"
                fill="#3A77D9" p-id="24381"></path>
              <path
                d="M885.76 56.888889h-35.726222v84.423111a91.022222 91.022222 0 0 1-91.022222 91.022222 91.022222 91.022222 0 0 1-91.022223-91.022222V56.888889H356.010667v84.423111a91.022222 91.022222 0 0 1-182.044445 0V56.888889H138.24A136.533333 136.533333 0 0 0 1.706667 193.422222v694.044445a136.533333 136.533333 0 0 0 136.533333 136.533333h747.52a136.533333 136.533333 0 0 0 136.533333-136.533333V193.422222a136.533333 136.533333 0 0 0-136.533333-136.533333z m98.986667 838.200889a86.471111 86.471111 0 0 1-86.243556 86.243555h-773.688889a86.471111 86.471111 0 0 1-85.560889-86.243555V380.131556a86.471111 86.471111 0 0 1 86.243556-86.243556h773.688889a86.471111 86.471111 0 0 1 86.243555 86.243556z"
                fill="#3A77D9" p-id="24382"></path>
              <path
                d="M161.905778 392.305778h115.256889v115.256889H161.905778zM454.428444 392.305778h115.256889v115.256889H454.428444zM746.837333 392.305778h115.256889v115.256889H746.837333zM161.905778 576.512h115.256889V691.768889H161.905778zM454.428444 576.512h115.256889V691.768889H454.428444zM746.837333 576.512h115.256889V691.768889H746.837333zM161.905778 760.718222h115.256889v115.256889H161.905778zM454.428444 760.718222h115.256889v115.256889H454.428444zM746.837333 760.718222h115.256889v115.256889H746.837333z"
                fill="#3A77D9" p-id="24383"></path>
            </svg>
            {{ archive.month }}</time>
          <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
            <li v-for="(article, index2) in archive.articles" :key="index2">
              <a @click="goArticleDetailPage(article.id)" class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img class="w-24 h-12 mb-3 mr-3 rounded-lg sm:mb-0" :src="article.cover" />
                <div class="text-gray-600 dark:text-gray-400">
                  <h2 class="text-base font-normal text-gray-900 dark:text-white">
                    {{ article.title }}
                  </h2>
                  <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                    <svg class="inline w-2.5 h-2.5 mr-2 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
                    </svg>

                    {{ article.createDate }}
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>

        <!-- 分页 -->
        <nav aria-label="Page navigation example" class="mt-10 flex justify-center" v-if="pages > 1">
          <ul class="flex items-center -space-x-px h-10 text-base">
            <!-- 上一页 -->
            <li>
              <a @click="getArchives(current - 1)"
                class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :class="[current > 1 ? '' : 'cursor-not-allowed']">

                <span class="sr-only">上一页</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                </svg>
              </a>
            </li>
            <!-- 页码 -->
            <li v-for="(pageNo, index) in pages" :key="index">
              <a @click="getArchives(pageNo)"
                class="flex items-center justify-center px-4 h-10 leading-tight border  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :class="[pageNo == current ? 'text-blue-600  bg-blue-50 border-blue-300 hover:bg-blue-100 hover:text-blue-700' : 'text-gray-500 border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700']">
                {{ index + 1 }}
              </a>
            </li>
            <!-- 下一页 -->
            <li>
              <a @click="getArchives(current + 1)"
                class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :class="[current < pages ? '' : 'cursor-not-allowed']">
                <span class="sr-only">下一页</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- 右边侧边栏，占用一列 -->
      <aside class="col-span-4 md:col-span-1 animate__animated animate__fadeInUp">
        <!-- 博主信息 -->
        <UserInfoCard></UserInfoCard>

        <!-- 分类 -->
        <CategoryListCard></CategoryListCard>

        <!-- 标签 -->
        <TagListCard></TagListCard>
      </aside>
    </div>

  </main>

  <Footer></Footer>
</template>

<script setup>
import Header from '@/layouts/frontend/components/Header.vue'
import Footer from '@/layouts/frontend/components/Footer.vue'
import UserInfoCard from '@/layouts/frontend/components/UserInfoCard.vue'
import TagListCard from '@/layouts/frontend/components/TagListCard.vue'
import CategoryListCard from '@/layouts/frontend/components/CategoryListCard.vue'

import { getArchivePageList } from '@/api/frontend/archive'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

//文章归档
const archives = ref([])

const current = ref(1)

const size = ref(10)
const total = ref(0)
const pages = ref(0)

function getArchives(currentNo) {
  // 上下页是否能点击判断，当要跳转上一页且页码小于 1 时，则不允许跳转；当要跳转下一页且页码大于总页数时，则不允许跳转
  if (currentNo < 1 || (pages.value > 0 && currentNo > pages.value)) return
  // 调用分页接口渲染数据
  getArchivePageList({ current: currentNo, size: size.value }).then((res) => {
    if (res.success) {
      archives.value = res.data
      current.value = res.current
      size.value = res.size
      total.value = res.total
      pages.value = res.pages
    }
    // console.log(archives.value)
  })
}
getArchives(current.value)

// 跳转文章详情页
const goArticleDetailPage = (articleId) => {
  router.push('/article/' + articleId)
}
</script>
<style scoped>
/**保持AdminFooter 在页面最底部 */
.admin-container {
  display: flex;
  flex-direction: column;
  min-height: 84vh;
}
</style>