<template>

  <div class="w-full py-5 px-2 mb-2 max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 ">

    <h2 class=" flex  items-center mb-2 font-bold text-gray-900 uppercase dark:text-white">

      <svg t="1704681397551" class="icon w-6 h-6 ml-2 mr-2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5083" width="200" height="200">
        <path
          d="M321.1264 194.56H165.888c-15.0528 0-26.8288 11.776-26.8288 26.8288v581.12c0 15.0528 11.776 26.8288 26.8288 26.8288h155.2384c15.0528 0 26.8288-11.776 26.8288-26.8288V221.3888c0-15.0528-12.288-26.8288-26.8288-26.8288z m-26.8288 581.12h-101.4784v-527.36h101.4784v527.36z m591.36-25.7024L736.8704 257.9456c-4.4032-14.0288-19.2512-21.9136-33.28-17.7152l-126.2592 38.0928v-56.9344c0-15.0528-11.776-26.8288-26.8288-26.8288H395.264c-15.0528 0-26.8288 11.776-26.8288 26.8288v581.12c0 15.0528 11.776 26.8288 26.8288 26.8288h155.2384c15.0528 0 26.8288-11.776 26.8288-26.8288V451.8912l108.544 358.2976c4.1984 14.2336 19.0464 22.4256 33.28 18.2272l148.7872-45.1584c6.9632-2.1504 12.3904-6.4512 16.0768-12.9024s3.7888-13.9264 1.6384-20.3776z m-361.984 25.7024h-101.4784v-527.36h101.4784v527.36z m205.6192-6.9632l-133.12-440.4224 97.1776-29.4912 133.2224 440.4224-97.28 29.4912z"
          p-id="5084" fill="#1296db"></path>
      </svg>

      最新文章
    </h2>
    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
      <li v-for="(article, index) in archives" :key="index">
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
</template>
  
  <script setup>
import { ref, computed, onMounted } from 'vue'
import { getArchiveNewPageList } from '@/api/frontend/archive'
import { useRouter } from 'vue-router'

const router = useRouter()

const archives = ref([])

function getArchives() {
  // 调用分页接口渲染数据
  getArchiveNewPageList().then((res) => {
    if (res.success) {
      archives.value = res.data
    }
    // console.log(archives.value)
  })
}
getArchives()

// 跳转文章详情页
const goArticleDetailPage = (articleId) => {
  router.push('/article/' + articleId)
}
</script>