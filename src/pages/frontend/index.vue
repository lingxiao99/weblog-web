<template>

  <Header></Header>

  <div style=" width: 1249px; " class="mx-auto  mt-3  -mb-2 bg-white    border border-gray-200 rounded-lg shadow-md bg-cover dark:bg-gray-800 dark:border-gray-700  ">
    <div class="flex items-center  ">
      <svg t="1705651083165" class="icon w-6 h-6 m-2  text-green-500 dark:text-green-400 " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4934" width="200"
        height="200">
        <path
          d="M833.163636 491.054545c0-109.381818-74.472727-204.8-179.2-235.054545-18.618182-4.654545-32.581818 6.981818-37.236363 23.272727 0 2.327273-2.327273 6.981818 0 6.981818 0 13.963636 6.981818 27.927273 20.945454 32.581819 95.418182 27.927273 153.6 125.672727 125.672728 223.418181-18.618182 62.836364-65.163636 107.054545-125.672728 125.672728-13.963636 4.654545-23.272727 18.618182-20.945454 32.581818 0 18.618182 13.963636 32.581818 30.254545 32.581818h6.981818c107.054545-34.909091 181.527273-130.327273 179.2-242.036364z"
          fill="#282a36" p-id="4935"></path>
        <path
          d="M728.436364 88.436364c-16.290909-6.981818-32.581818-2.327273-41.890909 13.963636-2.327273 4.654545-4.654545 6.981818-4.654546 13.963636 0 11.636364 6.981818 23.272727 18.618182 27.927273 193.163636 95.418182 272.290909 325.818182 179.2 518.981818-37.236364 76.8-100.072727 139.636364-179.2 176.872728-11.636364 6.981818-18.618182 16.290909-18.618182 27.927272 0 18.618182 13.963636 32.581818 32.581818 32.581818 4.654545 0 9.309091-2.327273 13.963637-4.654545 225.745455-109.381818 318.836364-379.345455 207.127272-605.090909-44.218182-86.109091-116.363636-160.581818-207.127272-202.472727zM491.054545 958.836364c-11.636364 0-25.6-2.327273-37.236363-9.309091l-4.654546-2.327273-181.527272-172.218182H130.327273c-44.218182 0-79.127273-34.909091-79.127273-76.8V288.581818c0-41.890909 34.909091-76.8 79.127273-76.8H267.636364l181.527272-172.218182c25.6-13.963636 55.854545-13.963636 81.454546 2.327273 23.272727 13.963636 39.563636 39.563636 39.563636 65.163636v774.981819c0 25.6-13.963636 48.872727-37.236363 65.163636-11.636364 6.981818-25.6 11.636364-41.89091 11.636364z m-4.654545-65.163637c6.981818 2.327273 11.636364 0 16.290909-2.327272 2.327273-2.327273 6.981818-4.654545 6.981818-9.309091V104.727273c0-4.654545-4.654545-9.309091-6.981818-9.309091-4.654545-2.327273-9.309091-4.654545-16.290909-2.327273L302.545455 269.963636l-9.309091 2.327273c-9.309091 2.327273-18.618182 4.654545-32.581819 4.654546H130.327273c-9.309091 0-16.290909 4.654545-16.290909 13.963636V698.181818c0 6.981818 6.981818 13.963636 16.290909 13.963637h130.327272c13.963636 0 25.6 2.327273 37.236364 9.30909l4.654546 2.327273 183.854545 169.890909z"
          fill="#282a36" p-id="4936"></path>
      </svg>
      <p class=" marquee-text flex justify-center hover:border-gray-900 w-full font-normal text-gray-700 dark:text-gray-400">{{everyDayName}} -- {{everyDayFrom}}</p>
    </div>
  </div>

  <!-- 主内容区域 -->
  <main class="container max-w-screen-xl mx-auto p-4  admin-container    ">
    <!-- grid 表格布局，分为 4 列 -->
    <div class="grid grid-cols-4 gap-7">
      <!-- 左边栏，占用 3 列 -->
      <div class="col-span-4 md:col-span-3 mb-3">
        <!-- 文章列表，grid 表格布局，分为 2 列 -->
        <div class="grid grid-cols-1 gap-4  ">
          <div v-for="(article, index) in articles" :key="index" class="col-span-2 md:col-span-1 hover:scale-[1.03] animate__animated animate__slideInLeft ">
            <div class="   relative hover:scale-[1.03] bg-white h-full border border-gray-200 rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
              <!-- 文章封面 -->
              <a @click="goArticleDetailPage(article.id)" class=" flex">
                <!-- <img class="rounded-t-lg h-48 w-full" :src="article.cover"> -->
                <template v-if="index % 2 === 0">
                  <div class="w-2/3">
                    <div class="image-background rounded-lg h-64 m-2" :style="`background-image: url(${article.cover}); background-size: cover; background-position: right;`"></div>
                  </div>
                  <div class="w-1/3 m-1 " style="display: flex;  ">
                    <div class="p-10 ml-2 ">
                      <!-- 标签 -->
                      <div class="mb-6">
                        <span v-for="(tag, tagIndex) in article.tags" :key="tagIndex" @click="goTagArticleListPage(tag.id,tag.name)" class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 
                                        rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 
                                        dark:hover:bg-green-950
                                        dark:text-green-300">
                          {{ tag.name }}
                        </span>
                      </div>
                      <!-- 文章标题 -->
                      <a @click="goArticleDetailPage(article.id)" class="cursor-pointer">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <span class="hover:border-gray-600 hover:border-b-2 dark:hover:border-gray-400">{{ article.title }}</span>
                        </h2>
                      </a>
                      <!-- 文章摘要 -->
                      <p v-if="article.summary" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ article.summary }}</p>
                      <!-- 文章发布时间、所属分类 -->
                      <p class="flex mt-12 items-center font-normal text-gray-400 text-sm dark:text-gray-400">
                        <!-- 发布时间 -->
                        <svg class="inline w-3 h-3   mr-2 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
                        </svg>
                        {{ article.createDate }}

                        <!-- 所属分类 -->
                        <svg class="inline w-3 h-3 ml-5 mr-2 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z" />
                        </svg>
                        <a @click="goCategoryArticleListPage(article.category.id, article.category.name)" class="text-gray-400 hover:underline">{{ article.category.name }}</a>
                      </p>

                      <!-- 是否置顶 -->
                      <div v-if="article.isTop"
                        class="  absolute inline-flex items-center justify-center w-14 h-7 text-1xs font-bold text-white bg-red-500 border-4 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                        精选
                      </div>
                    </div>
                  </div>
                </template>
                <template v-else>
                  <div class="w-1/3  " style="display: flex;  ">
                    <div class="p-11">
                      <!-- 标签 -->
                      <div class="mb-6 ">
                        <span v-for="(tag, tagIndex) in article.tags" :key="tagIndex" @click="goTagArticleListPage(tag.id,tag.name)"
                          class="cursor-pointer bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded hover:bg-green-200 hover:text-green-900 dark:bg-green-900 dark:text-green-300">
                          {{ tag.name }}
                        </span>
                      </div>
                      <!-- 文章标题 -->
                      <a @click="goArticleDetailPage(article.id)" class="cursor-pointer">
                        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          <span class="hover:border-gray-600 hover:border-b-2">{{ article.title }}</span>
                        </h2>
                      </a>
                      <!-- 文章摘要 -->
                      <p v-if="article.summary" class="mb-3 font-normal text-gray-500 dark:text-gray-400">{{ article.summary }}</p>
                      <!-- 文章发布时间、所属分类 -->
                      <p class="flex mt-12 items-center font-normal text-gray-400 text-sm dark:text-gray-400">
                        <!-- 发布时间 -->
                        <svg class="inline w-3 h-3 mr-2 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
                        </svg>
                        {{ article.createDate }}

                        <!-- 所属分类 -->
                        <svg class="inline w-3 h-3 ml-5 mr-2 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H1Zm0 0V2a1 1 0 0 1 1-1h5.443a1 1 0 0 1 .8.4l2.7 3.6H1Z" />
                        </svg>
                        <a @click="goCategoryArticleListPage(article.category.id, article.category.name)" class="text-gray-400 hover:underline">{{ article.category.name }}</a>
                      </p>
                      <!-- 是否置顶 -->
                      <div v-if="article.isTop"
                        class="absolute inline-flex items-center justify-center w-14 h-7 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                        置顶
                      </div>
                    </div>
                  </div>

                  <div class="w-2/3 ">
                    <div class="image-background rounded-lg h-64 m-2" :style="`background-image: url(${article.cover}); background-size: cover; background-position: right;`"></div>
                  </div>
                </template>
              </a>

            </div>
          </div>
        </div>
        <!-- 分页 -->
        <nav aria-label="Page navigation example" class="mt-10 flex justify-center animate__animated animate__fadeInUp">
          <ul class="flex items-center -space-x-px h-10 text-base">
            <!-- 上一页 -->
            <li>
              <a @click="getArticles(current - 1)"
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
              <a @click="getArticles(pageNo)"
                class="flex items-center justify-center px-4 h-10 leading-tight border  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                :class="[pageNo == current ? 'text-sky-600  bg-sky-50 border-sky-300 hover:bg-sky-100 hover:text-sky-700' : 'text-gray-500 border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700']">
                {{ index + 1 }}
              </a>
            </li>
            <!-- 下一页 -->
            <li>
              <a @click="getArticles(current + 1)"
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
      <aside class="col-span-4 md:col-span-1 animate__animated animate__slideInRight">
        <!-- 博主信息 -->
        <UserInfoCard></UserInfoCard>

        <!-- 公告 -->
        <!-- <Notice></Notice> -->

        <!-- 分类 -->
        <CategoryListCard></CategoryListCard>

        <!-- 标签 -->
        <TagListCard></TagListCard>
        <!-- 最新文章 -->
        <!-- <NewArticleCard></NewArticleCard> -->

      </aside>
    </div>

  </main>

  <!-- 返回顶部 -->
  <ScrollToTopButton></ScrollToTopButton>

  <Footer></Footer>

</template>

<script setup>
import Header from '@/layouts/frontend/components/Header.vue'
import Footer from '@/layouts/frontend/components/Footer.vue'
import UserInfoCard from '@/layouts/frontend/components/UserInfoCard.vue'
import CategoryListCard from '@/layouts/frontend/components/CategoryListCard.vue'
import TagListCard from '@/layouts/frontend/components/TagListCard.vue'
import Notice from '@/layouts/frontend/components/Notice.vue'
import NewArticleCard from '@/layouts/frontend/components/NewArticleCard.vue'
import { initTooltips } from 'flowbite'
import { onMounted, ref } from 'vue'
import { getArticlePageList } from '@/api/frontend/article'
import { getVerse } from '@/api/frontend/index'
import { useRouter } from 'vue-router'
//返回顶部
import ScrollToTopButton from '@/layouts/frontend/components/ScrollToTopButton.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initTooltips()
  getVerse()
})

// 文章集合
const articles = ref([])
// 当前页码
const current = ref(1)
// 每页显示的文章数
const size = ref(4)
// 总文章数
const total = ref(0)
// 总共多少页
const pages = ref(0)

const everyDayName = ref(null)
const everyDayFrom = ref(null)

getVerse().then((res) => {
  if (res.message) {
    everyDayName.value = res.result.name
    everyDayFrom.value = res.result.from
  }
})

//引入路由
const router = useRouter()

function getArticles(currentNo) {
  // 上下页是否能点击判断，当要跳转上一页且页码小于 1 时，则不允许跳转；当要跳转下一页且页码大于总页数时，则不允许跳转
  if (currentNo < 1 || (pages.value > 0 && currentNo > pages.value)) return
  // 调用分页接口渲染数据
  getArticlePageList({ current: currentNo, size: size.value }).then((res) => {
    if (res.success) {
      articles.value = res.data
      current.value = res.current
      size.value = res.size
      total.value = res.total
      pages.value = res.pages
    }
  })
}
getArticles(current.value)

//跳转分类文章列表页
const goCategoryArticleListPage = (id, name) => {
  router.push({ path: '/category/article/list', query: { id, name } })
}

//跳转文章详情页
const goArticleDetailPage = (articleId) => {
  router.push('/article/' + articleId)
}

const goTagArticleListPage = (id, name) => {
  router.push({ path: '/tag/article/list', query: { id, name } })
}
</script>
<style scoped>
/**保持AdminFooter 在页面最底部 */
.admin-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.bg-cover {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
<style >
/* 解决页面右侧滑动条显示问题*/
::-webkit-scrollbar {
  display: none;
}

.marquee-text {
  white-space: nowrap;
  overflow: hidden;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-00%);
  }
}
</style>



