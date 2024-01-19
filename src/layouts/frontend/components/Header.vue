<template>
  <header class="sticky top-0 z-10">
    <nav class="bg-white border-gray-200 border-b dark:border-gray-800 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <!-- 博客 LOGO 、博客名称 -->
        <a href="/" class="flex items-center">
          <!-- <img src="../../../assets/logo.png" class="h-8 mr-3  " alt="Flowbite Logo" /> -->
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{{ blogSettingsStore.blogSettings.name }}</span>
        </a>
        <div class="flex items-center md:order-2 mr-2">
          <!-- 白天黑夜切换 -->
          <button @click="toggleDark()" class="ml-1 mr-4 vt-switch vt-switch-appearance" type="button" role="switch" aria-label="切换深色模式" aria-checked="false" data-v-d401ce6f=""><span
              class="vt-switch-check">
              <span class="vt-switch-icon"><!--[-->
                <!-- 太阳图标 -->
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="vt-switch-appearance-sun" :class="[isDark ? 'hidden' : 'block']">
                  <path d="M12,18c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,18,12,18zM12,8c-2.2,0-4,1.8-4,4c0,2.2,1.8,4,4,4c2.2,0,4-1.8,4-4C16,9.8,14.2,8,12,8z">
                  </path>
                  <path d="M12,4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,3.6,12.6,4,12,4z">
                  </path>
                  <path d="M12,24c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C13,23.6,12.6,24,12,24z">
                  </path>
                  <path d="M5.6,6.6c-0.3,0-0.5-0.1-0.7-0.3L3.5,4.9c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C6.2,6.5,5.9,6.6,5.6,6.6z">
                  </path>
                  <path d="M19.8,20.8c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4c0.4,0.4,0.4,1,0,1.4C20.3,20.7,20,20.8,19.8,20.8z">
                  </path>
                  <path d="M3,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S3.6,13,3,13z"></path>
                  <path d="M23,13h-2c-0.6,0-1-0.4-1-1s0.4-1,1-1h2c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                  <path d="M4.2,20.8c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C4.7,20.7,4.5,20.8,4.2,20.8z">
                  </path>
                  <path d="M18.4,6.6c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.4,1.4C18.9,6.5,18.6,6.6,18.4,6.6z">
                  </path>
                </svg>
                <!-- 黑夜图标 -->
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="vt-switch-appearance-moon" :class="[isDark ? 'block' : 'hidden']">
                  <path
                    d="M12.1,22c-0.3,0-0.6,0-0.9,0c-5.5-0.5-9.5-5.4-9-10.9c0.4-4.8,4.2-8.6,9-9c0.4,0,0.8,0.2,1,0.5c0.2,0.3,0.2,0.8-0.1,1.1c-2,2.7-1.4,6.4,1.3,8.4c2.1,1.6,5,1.6,7.1,0c0.3-0.2,0.7-0.3,1.1-0.1c0.3,0.2,0.5,0.6,0.5,1c-0.2,2.7-1.5,5.1-3.6,6.8C16.6,21.2,14.4,22,12.1,22zM9.3,4.4c-2.9,1-5,3.6-5.2,6.8c-0.4,4.4,2.8,8.3,7.2,8.7c2.1,0.2,4.2-0.4,5.8-1.8c1.1-0.9,1.9-2.1,2.4-3.4c-2.5,0.9-5.3,0.5-7.5-1.1C9.2,11.4,8.1,7.7,9.3,4.4z">
                  </path>
                </svg><!--]--></span>
            </span>
          </button>
          <!-- 搜索框 -->
          <button type="button" @click="clickSearchBtn"
            class="mr-2 hidden outline-none lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700">
            <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="mr-3">搜索文章 ...</span>
            <span class="px-2 py-[1px] flex-none text-xs border text-gray-400 rounded dark:border-gray-600 ">Ctrl K</span>
          </button>

          <!-- 登录 -->
          <div class="text-gray-900 ml-1 mr-1 hover:text-blue-700 dark:text-white" v-if="!isLogined" @click="$router.push('/login')">
            登录
          </div>
          <!-- 已经登录，展示用户头像 -->
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" v-else
            class="text-white ml-2 mr-2 md:mr-0 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            <!-- 用户登录头像 -->
            <img class="w-12 h-12 rounded-full" :src="blogSettingsStore.blogSettings.avatar" alt="user photo" />
          </button>

          <!-- Dropdown menu -->
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a @click="router.push('/admin/index')" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="inline w-3 h-3 mb-[2px] mr-1 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M10 14v4m-4 1h8M1 10h18M2 1h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                  </svg>
                  进入后台
                </a>
              </li>
              <li>
                <a data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  <svg class="inline w-3 h-3 mb-[2px] mr-1 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                  </svg>
                  退出登录
                </a>
              </li>
            </ul>
          </div>

          <button data-collapse-toggle="navbar-search" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
          <!-- 移动端搜索框 -->
          <button type="button" @click="clickSearchBtn" class="relative mt-3 flex w-full md:hidden items-center text-sm leading-6 text-slate-400 rounded-md
                         ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 
                         dark:highlight-white/5 dark:hover:bg-slate-700 dark:hover:ring-slate-700">
            <svg class="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span class="mr-3 grow text-left">搜索文章 ...</span>
            <span class="px-2 py-[1px] flex-none text-xs border text-gray-400 rounded dark:border-gray-600">Ctrl
              K</span>
          </button>
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a @click="router.push('/')" :class="[currPath == '/' ? 'text-sky-600 md:border-b-2 md:border-sky-600 dark:text-sky-500 dark:md:border-sky-600' : 'text-gray-900 dark:text-white']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page">首页</a>
            </li>
            <li>
              <a @click="router.push('/category/list')"
                :class="[currPath.startsWith('/category/list') ? 'text-sky-600 md:border-b-2 md:border-sky-600 dark:text-sky-500 dark:md:border-sky-600' : 'text-gray-900 dark:text-white']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">分类</a>

            </li>
            <li>
              <a @click="router.push('/tag/list')"
                :class="[currPath.startsWith('/tag') ? 'text-sky-600 md:border-b-2 md:border-sky-600 dark:text-sky-500 dark:md:border-sky-600' : 'text-gray-900 dark:text-white']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">标签</a>
            </li>
            <li>
              <a @click="router.push('/archive/list')"
                :class="[currPath == '/archive/list' ? 'text-sky-600 md:border-b-2 md:border-sky-600 dark:text-sky-500 dark:md:border-sky-600' : 'text-gray-900 dark:text-white']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">归档</a>
            </li>
            <li>
              <a @click="router.push('/about/me')"
                :class="[currPath == '/about/me' ? 'text-sky-600 md:border-b-2 md:border-sky-600 dark:text-sky-500 dark:md:border-sky-600' : 'text-gray-900 dark:text-white']"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-sky-600 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">关于我</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <!-- 退出登录 -->
  <div id="popup-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-md max-h-full">
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button"
          class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-6 text-center">
          <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            是否确定退出登录?
          </h3>
          <button @click="logout" data-modal-hide="popup-modal" type="button"
            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
            确定
          </button>
          <button data-modal-hide="popup-modal" type="button"
            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
            取消
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 站内搜索 -->
  <div id="search-modal" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center  w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-2xl max-h-full">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">

          <!-- 搜索框 -->
          <form class="w-full mr-2">
            <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <div v-if="searchLoading" role="status">
                  <svg aria-hidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-sky-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor" />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                <svg v-else class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>

              </div>

              <input type="search" ref="searchInputRef" id="search" v-model="searchWord"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-sky-500 focus:border-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500"
                placeholder="请输入搜索关键字..." required>
            </div>
          </form>
          <!-- 关闭 Modal -->
          <button type="button" @click="searchModal.hide()"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="p-4 md:p-5 space-y-4">

          <div v-if="searchArticles && searchArticles.length > 0">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              共搜索到{{total}} 篇相关文章
            </p>
            <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-600 ">
              <li v-for="(article,index) in searchArticles" :key="index">
                <a @click="jumpToArticleDetailPage(article.id)" class="items-center block p-3 sm:flex hover:bg-gray-100 hover:rounded-lg dark:hover:bg-gray-600">
                  <img class="w-24 h-12 mb-3 mr-3 rounded-lg sm:mb-0" :src="article.cover">
                  <div class="text-gray-600 dark:text-gray-400 ">
                    <h2 class="text-base font-normal text-gray-900 dark:text-white" v-html="article.title">
                    </h2>
                    <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400"><svg class="inline w-2.5 h-2.5 mr-2 text-gray-400 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z">
                        </path>
                      </svg> {{ article.createDate }}</span>
                  </div>
                </a>
              </li>

            </ol>
            <!-- 分页 -->
            <div class="flex mt-7">
              <a v-if="current>1" @click="prePage" class="flex items-center justify-center px-3 h-8 me-3 text-xs font-medium text-gray-500 border 
                                border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-700 
                                dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                </svg>
              </a>

              <a v-if="current<pages" @click="nextPage" class="flex ml-auto items-center justify-center px-3 h-8 text-xs font-medium text-gray-500 
                                border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-600 
                             dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>

          </div>
          <!-- 未搜索到结果提示 -->
          <div v-else class="flex items-center justify-center flex-col mb-10">
            <svg class="w-50 h-50" height="200" node-id="1" sillyvg="true" template-height="1000" template-width="1287" version="1.1" viewBox="0 0 466 584" width="466"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs node-id="46"></defs>
              <g node-id="127">
                <path
                  d="M 152.90 563.20 C 152.90 574.51 118.67 583.68 76.45 583.68 C 34.23 583.68 -0.00 574.51 -0.00 563.20 C -0.00 551.89 34.23 542.72 76.45 542.72 C 118.67 542.72 152.90 551.89 152.90 563.20 Z"
                  fill="#d6d6d6" fill-rule="nonzero" group-id="1" node-id="50" stroke="none" target-height="40.960022" target-width="152.9" target-x="-0" target-y="542.72" />
                <path
                  d="M 278.77 579.27 C 272.24 579.27 265.68 578.69 259.34 578.12 C 253.15 577.57 246.75 577.01 240.53 577.01 L 238.88 577.01 C 230.21 577.15 221.37 577.63 212.82 578.09 C 202.49 578.65 191.82 579.23 181.25 579.23 C 179.68 579.23 178.12 579.23 176.56 579.23 C 162.31 578.99 142.80 578.65 129.89 567.16 C 106.00 545.86 119.00 508.76 130.55 476.00 C 134.38 465.09 138.01 454.79 140.27 445.37 C 145.27 424.37 145.62 401.80 145.93 379.94 C 146.09 368.16 146.27 355.94 147.17 344.23 C 149.60 312.84 153.52 279.99 172.07 253.56 C 193.89 222.51 229.46 204.02 267.41 204.00 L 267.41 204.00 C 290.01 203.97 312.14 210.54 331.05 222.92 C 371.16 249.14 380.25 289.86 386.68 332.81 C 387.68 339.81 388.78 349.81 389.90 360.41 C 391.74 377.93 393.83 397.78 396.38 408.75 C 410.28 468.48 426.71 500.01 460.90 557.75 C 463.32 561.85 463.37 566.93 461.01 571.06 C 458.65 575.20 454.26 577.75 449.50 577.75 L 449.40 577.75 C 445.61 577.75 441.81 577.50 438.13 577.25 C 434.45 577.00 430.89 576.77 427.33 576.77 C 415.78 576.77 404.10 577.31 392.80 577.77 C 381.50 578.23 369.69 578.77 358.09 578.77 L 358.00 578.77 C 352.00 578.77 346.00 578.26 340.12 577.77 C 334.43 577.29 328.54 576.77 322.82 576.77 L 322.71 576.77 C 315.42 576.77 307.94 577.38 300.71 577.98 C 294.16 578.52 287.38 579.08 280.66 579.19 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="52" stroke="none" target-height="375.30313" target-width="357.3664" target-x="106" target-y="203.96689" />
                <path
                  d="M 267.41 207.50 C 289.33 207.51 310.78 213.88 329.14 225.85 C 368.20 251.39 376.97 291.59 383.22 333.32 C 385.97 351.74 388.82 391.66 392.97 409.54 C 407.10 470.28 424.47 503.09 457.89 559.48 C 459.67 562.49 459.69 566.23 457.96 569.26 C 456.22 572.30 453.00 574.18 449.50 574.18 L 449.41 574.18 C 442.05 574.18 434.69 573.18 427.33 573.18 L 427.23 573.18 C 404.18 573.18 381.13 575.24 358.08 575.27 L 358.00 575.27 C 346.28 575.27 334.55 573.27 322.82 573.27 L 322.70 573.27 C 308.70 573.27 294.62 575.45 280.58 575.69 L 278.81 575.69 C 266.06 575.69 253.31 573.42 240.57 573.42 L 238.86 573.42 C 219.66 573.74 200.47 575.64 181.29 575.64 C 179.75 575.64 178.20 575.64 176.66 575.64 C 161.77 575.39 143.92 574.84 132.25 564.46 C 102.73 538.18 134.50 484.58 143.71 446.16 C 151.56 413.43 148.12 377.94 150.71 344.48 C 153.08 313.88 156.87 281.35 174.98 255.55 C 196.21 225.50 230.67 207.58 267.46 207.44 M 267.46 200.44 C 228.39 200.58 191.80 219.62 169.26 251.53 C 150.19 278.68 146.20 312.07 143.73 343.94 C 142.82 355.81 142.64 368.04 142.48 379.87 C 142.17 401.54 141.85 423.95 136.91 444.53 C 134.70 453.78 131.10 464.00 127.30 474.81 C 115.42 508.58 101.96 546.81 127.61 569.68 C 141.49 582.04 161.75 582.39 176.55 582.68 C 178.09 582.68 179.69 582.68 181.30 582.68 C 191.95 582.68 202.69 582.10 213.07 581.54 C 221.58 581.08 230.39 580.60 238.99 580.46 L 240.58 580.46 C 246.64 580.46 252.68 581.00 259.08 581.57 C 265.48 582.14 272.14 582.73 278.82 582.73 L 280.72 582.73 C 287.55 582.61 294.39 582.05 301.00 581.51 C 308.49 580.89 315.57 580.31 322.71 580.31 L 322.83 580.31 C 328.41 580.31 333.96 580.77 339.83 581.26 C 345.70 581.75 351.83 582.26 358.00 582.26 L 358.14 582.26 C 369.81 582.26 381.60 581.72 393.01 581.26 C 404.26 580.76 415.90 580.26 427.28 580.26 L 427.37 580.26 C 430.82 580.26 434.28 580.49 437.94 580.74 C 441.60 580.99 445.53 581.24 449.45 581.24 L 449.55 581.24 C 455.56 581.23 461.11 578.01 464.08 572.78 C 467.06 567.56 467.01 561.14 463.95 555.97 C 429.95 498.61 413.61 467.27 399.83 408.02 C 397.33 397.26 395.25 377.52 393.42 360.10 C 392.29 349.45 391.23 339.40 390.18 332.35 C 387.30 313.12 383.52 290.93 374.97 270.84 C 365.70 249.06 351.97 232.45 332.97 220.05 C 313.48 207.30 290.70 200.53 267.41 200.56 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="54" stroke="none" target-height="382.28998" target-width="365.09753" target-x="101.96" target-y="200.44" />
                <path
                  d="M 150.66 344.54 C 153.03 313.94 156.82 281.41 174.93 255.61 C 195.93 225.69 230.86 208.50 267.41 208.50 C 289.25 208.50 310.86 213.89 329.14 225.85 C 368.20 251.39 375.97 291.59 382.22 333.32 C 384.97 351.74 386.82 391.66 390.97 409.54 C 405.10 470.28 424.47 503.09 457.89 559.48 L 457.89 559.48 C 424.47 503.09 407.10 465.05 393.00 404.32 C 388.85 386.44 386.00 346.51 383.25 328.10 C 377.00 286.37 368.25 246.16 329.17 220.62 C 278.15 187.36 209.94 200.52 174.96 250.38 C 156.85 276.19 153.06 308.71 150.69 339.31"
                  fill="#33322d" fill-rule="nonzero" group-id="1" node-id="56" stroke="none" target-height="372.1207" target-width="307.23" target-x="150.66" target-y="187.35928" />
                <path
                  d="M 168.72 414.78 L 153.82 425.15 L 147.67 421.57 C 150.19 396.11 148.72 369.75 150.67 344.57 C 152.67 318.41 155.76 290.84 167.92 267.27 C 147.59 356.21 168.72 414.78 168.72 414.78 Z"
                  fill="#2d2c28" fill-rule="nonzero" group-id="1" node-id="58" stroke="none" target-height="157.88" target-width="21.130005" target-x="147.59" target-y="267.27" />
                <path
                  d="M 344.76 318.00 C 344.76 372.60 316.50 403.80 265.91 403.80 C 215.32 403.80 187.00 372.63 187.00 318.00 C 187.00 263.37 215.31 229.73 265.89 229.73 C 316.47 229.73 344.76 263.42 344.76 318.00 Z"
                  fill="#ffffff" fill-rule="nonzero" group-id="1" node-id="60" stroke="none" target-height="174.06999" target-width="157.76001" target-x="187" target-y="229.73" />
                <path
                  d="M 234.12 299.75 C 234.12 306.38 229.12 308.32 223.00 308.32 C 216.88 308.32 211.88 306.38 211.88 299.75 C 211.88 293.12 216.88 291.55 223.00 291.55 C 229.12 291.55 234.12 293.13 234.12 299.75 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="62" stroke="none" target-height="16.77002" target-width="22.23999" target-x="211.88" target-y="291.55" />
                <path
                  d="M 231.00 313.57 C 231.00 314.75 227.43 315.10 223.00 315.10 C 218.57 315.10 215.00 314.75 215.00 313.57 C 215.00 312.39 218.57 312.11 223.00 312.11 C 227.43 312.11 231.00 312.39 231.00 313.57 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="64" stroke="none" target-height="2.9900208" target-width="16" target-x="215" target-y="312.11" />
                <path
                  d="M 232.75 284.22 C 232.79 284.83 232.51 285.42 232.00 285.77 C 231.50 286.12 230.85 286.18 230.29 285.92 C 226.41 283.84 221.76 283.80 217.85 285.82 C 217.24 286.11 216.52 286.02 215.99 285.59 C 215.47 285.17 215.23 284.48 215.39 283.82 C 217.19 272.57 223.51 263.18 232.07 258.27 C 232.71 257.94 233.49 258.03 234.04 258.50 C 234.59 258.98 234.80 259.73 234.57 260.42 C 232.73 267.51 232.69 275.58 232.75 284.22 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="66" stroke="none" target-height="28.235626" target-width="19.566422" target-x="215.23387" target-y="257.93958" />
                <path
                  d="M 232.84 324.00 C 232.84 321.89 231.13 320.51 229.61 321.39 C 225.52 323.82 220.44 323.86 216.32 321.49 C 214.70 320.58 212.90 322.43 213.23 324.63 C 215.35 338.91 222.23 350.85 231.41 357.38 C 233.14 358.60 235.24 356.59 234.74 354.17 C 232.86 345.13 232.79 334.91 232.84 324.00 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="68" stroke="none" target-height="38.089996" target-width="22.340012" target-x="212.9" target-y="320.51" />
                <path
                  d="M 297.67 299.75 C 297.67 306.38 302.67 308.32 308.78 308.32 C 314.89 308.32 319.90 306.38 319.90 299.75 C 319.90 293.12 314.90 291.55 308.78 291.55 C 302.66 291.55 297.67 293.13 297.67 299.75 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="70" stroke="none" target-height="16.77002" target-width="22.22998" target-x="297.67" target-y="291.55" />
                <path
                  d="M 300.80 313.57 C 300.80 314.75 304.37 315.10 308.80 315.10 C 313.23 315.10 316.80 314.75 316.80 313.57 C 316.80 312.39 313.23 312.11 308.80 312.11 C 304.37 312.11 300.80 312.39 300.80 313.57 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="72" stroke="none" target-height="2.9900208" target-width="16" target-x="300.8" target-y="312.11" />
                <path
                  d="M 299.00 284.22 C 298.95 284.83 299.23 285.43 299.74 285.78 C 300.25 286.13 300.90 286.18 301.46 285.92 C 305.33 283.84 309.98 283.80 313.89 285.82 C 314.50 286.11 315.22 286.02 315.75 285.59 C 316.27 285.17 316.51 284.48 316.35 283.82 C 314.56 272.57 308.23 263.18 299.67 258.27 C 299.03 257.93 298.24 258.03 297.70 258.50 C 297.15 258.97 296.94 259.73 297.18 260.42 C 299.05 267.51 299.09 275.58 299.00 284.22 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="74" stroke="none" target-height="28.246826" target-width="19.563873" target-x="296.94226" target-y="257.9349" />
                <path
                  d="M 298.94 324.00 C 298.94 321.89 300.66 320.51 302.18 321.39 C 306.26 323.82 311.34 323.86 315.46 321.49 C 317.09 320.58 318.88 322.43 318.56 324.63 C 316.43 338.91 309.61 350.85 300.37 357.38 C 298.64 358.60 296.54 356.59 297.05 354.17 C 298.92 345.13 299.00 334.91 298.94 324.00 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="76" stroke="none" target-height="38.089996" target-width="22.339996" target-x="296.54" target-y="320.51" />
                <path
                  d="M 280.53 371.58 C 280.53 378.50 272.90 379.13 265.63 379.13 C 258.36 379.13 251.25 378.39 251.25 371.58 C 251.25 365.27 258.36 364.58 265.63 364.58 C 272.90 364.58 280.53 365.38 280.53 371.58 Z"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="78" stroke="none" target-height="14.550018" target-width="29.279999" target-x="251.25" target-y="364.58" />
                <path
                  d="M 272.59 384.24 C 272.59 385.51 269.10 386.41 265.77 386.41 C 262.44 386.41 259.19 385.49 259.19 384.24 C 259.19 382.99 262.45 383.75 265.77 383.75 C 269.09 383.75 272.59 383.10 272.59 384.24 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="80" stroke="none" target-height="3.4200134" target-width="13.399994" target-x="259.19" target-y="382.99" />
                <path
                  d="M 134.16 522.14 C 136.90 504.14 151.65 477.74 151.65 477.74 L 134.91 474.18 C 123.21 507.53 109.38 544.18 132.21 564.52 C 139.73 571.07 149.38 574.62 159.35 574.52 L 163.00 574.52 C 127.49 568.17 131.35 540.46 134.16 522.14 Z"
                  fill="#191815" fill-rule="nonzero" group-id="1" node-id="82" stroke="none" target-height="100.44391" target-width="53.620003" target-x="109.38" target-y="474.18" />
                <path
                  d="M 319.00 518.61 C 315.12 518.56 311.53 516.53 309.49 513.23 C 307.45 509.92 307.24 505.80 308.94 502.31 C 319.35 481.06 336.94 441.66 337.89 416.48 C 337.96 414.55 339.59 413.04 341.52 413.11 C 343.45 413.18 344.96 414.81 344.89 416.74 C 343.89 443.22 325.89 483.65 315.23 505.39 C 314.47 506.94 314.71 508.80 315.84 510.11 C 316.98 511.42 318.78 511.93 320.43 511.39 C 366.43 495.95 374.77 450.12 374.84 449.66 C 375.16 447.75 376.97 446.47 378.88 446.79 C 380.79 447.11 382.07 448.92 381.75 450.83 C 381.40 452.88 372.69 501.22 322.66 518.02 C 321.48 518.42 320.24 518.61 319.00 518.61 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="84" stroke="none" target-height="105.57648" target-width="74.83212" target-x="307.24097" target-y="413.0382" />
                <path
                  d="M 148.75 475.83 C 148.75 475.83 103.31 476.69 68.29 439.23 C 66.15 436.93 65.61 433.57 66.91 430.71 C 68.20 427.84 71.09 426.04 74.23 426.13 C 98.13 426.79 141.85 426.44 165.76 416.61"
                  fill="#23221d" fill-rule="nonzero" group-id="1" node-id="86" stroke="none" target-height="60.080017" target-width="100.15115" target-x="65.60884" target-y="416.61" />
                <path
                  d="M 148.35 479.34 C 143.11 479.34 99.92 478.19 65.73 441.62 C 62.62 438.29 61.82 433.41 63.70 429.26 C 65.58 425.11 69.76 422.49 74.32 422.62 C 97.97 423.28 141.12 422.95 164.43 413.36 C 166.22 412.63 168.27 413.48 169.00 415.27 C 169.73 417.06 168.88 419.11 167.09 419.84 C 142.59 429.91 98.34 430.28 74.09 429.62 L 74.00 429.62 C 72.31 429.62 70.77 430.62 70.10 432.17 C 69.36 433.73 69.66 435.59 70.86 436.84 C 104.34 472.66 148.26 472.32 148.69 472.33 L 148.75 472.33 C 150.68 472.31 152.27 473.86 152.28 475.80 C 152.30 477.73 150.75 479.31 148.82 479.33 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="88" stroke="none" target-height="66.71454" target-width="107.91237" target-x="61.822174" target-y="412.62546" />
                <path
                  d="M 341.59 413.35 C 341.59 413.35 353.01 412.35 352.06 433.97 C 351.11 455.59 322.81 496.97 311.90 510.35 L 315.58 493.60 L 325.10 474.60 L 336.52 442.60 L 339.05 417.38 L 339.85 414.05 Z"
                  fill="#2d2c28" fill-rule="nonzero" group-id="1" node-id="90" stroke="none" target-height="98" target-width="41.110016" target-x="311.9" target-y="412.35" />
                <path
                  d="M 379.86 447.08 C 379.86 447.08 387.48 453.42 383.25 468.01 C 379.02 482.60 361.57 510.35 321.50 518.12 L 335.50 507.34 L 350.30 498.25 L 359.61 486.83 L 368.91 474.99 L 373.98 461.85 Z"
                  fill="#191815" fill-rule="nonzero" group-id="1" node-id="92" stroke="none" target-height="71.04001" target-width="65.98001" target-x="321.5" target-y="447.08" />
                <path
                  d="M 319.00 518.61 C 315.12 518.56 311.53 516.53 309.49 513.23 C 307.45 509.92 307.24 505.80 308.94 502.31 C 319.35 481.06 336.94 441.66 337.89 416.48 C 337.96 414.55 339.59 413.04 341.52 413.11 C 343.45 413.18 344.96 414.81 344.89 416.74 C 343.89 443.22 325.89 483.65 315.23 505.39 C 314.47 506.94 314.71 508.80 315.84 510.11 C 316.98 511.42 318.78 511.93 320.43 511.39 C 366.43 495.95 374.77 450.12 374.84 449.66 C 375.16 447.75 376.97 446.47 378.88 446.79 C 380.79 447.11 382.07 448.92 381.75 450.83 C 381.40 452.88 372.69 501.22 322.66 518.02 C 321.48 518.42 320.24 518.61 319.00 518.61 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="94" stroke="none" target-height="105.57648" target-width="74.83212" target-x="307.24097" target-y="413.0382" />
                <path
                  d="M 152.21 476.39 L 149.06 474.71 L 147.67 474.19 L 141.48 475.42 C 127.90 474.05 97.67 468.15 71.88 442.91 C 107.35 464.48 144.19 459.39 149.38 463.99 C 150.18 464.70 150.87 465.51 151.44 466.42 L 151.44 466.42 C 154.25 471.00 152.21 476.39 152.21 476.39 Z"
                  fill="#191815" fill-rule="nonzero" group-id="1" node-id="96" stroke="none" target-height="33.48001" target-width="82.37" target-x="71.88" target-y="442.91" />
                <path
                  d="M 161.86 430.17 C 161.52 430.34 161.16 430.49 160.79 430.64 C 150.68 434.64 92.58 439.84 67.79 429.26 C 69.29 427.21 71.72 426.03 74.26 426.13 C 98.17 426.79 141.88 426.44 165.80 416.61 L 168.80 414.78 C 168.80 414.78 172.14 425.33 161.86 430.17 Z"
                  fill="#2d2c28" fill-rule="nonzero" group-id="1" node-id="98" stroke="none" target-height="25.059998" target-width="104.35" target-x="67.79" target-y="414.78" />
                <path
                  d="M 168.72 414.78 L 153.90 422.71 L 147.67 421.57 C 150.19 396.11 148.72 369.75 150.67 344.57 C 152.67 318.41 155.76 290.84 167.92 267.27 C 147.59 356.21 168.72 414.78 168.72 414.78 Z"
                  fill="#191815" fill-rule="nonzero" group-id="1" node-id="100" stroke="none" target-height="155.44" target-width="21.130005" target-x="147.59" target-y="267.27" />
                <path
                  d="M 148.35 479.34 C 143.11 479.34 99.92 478.19 65.73 441.62 C 62.62 438.29 61.82 433.41 63.70 429.26 C 65.58 425.11 69.76 422.49 74.32 422.62 C 97.97 423.28 141.12 422.95 164.43 413.36 C 166.22 412.63 168.27 413.48 169.00 415.27 C 169.73 417.06 168.88 419.11 167.09 419.84 C 142.59 429.91 98.34 430.28 74.09 429.62 L 74.00 429.62 C 72.31 429.62 70.77 430.62 70.10 432.17 C 69.36 433.73 69.66 435.59 70.86 436.84 C 104.34 472.66 148.26 472.32 148.69 472.33 L 148.75 472.33 C 150.68 472.31 152.27 473.86 152.28 475.80 C 152.30 477.73 150.75 479.31 148.82 479.33 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="102" stroke="none" target-height="66.71454" target-width="107.91237" target-x="61.822174" target-y="412.62546" />
                <path
                  d="M 84.46 525.82 C 83.74 525.82 83.13 525.30 83.00 524.60 C 81.47 516.60 80.17 508.40 79.11 500.31 C 72.55 450.19 78.19 399.09 84.58 355.72 C 92.20 303.95 90.49 241.78 79.50 170.94 C 79.37 170.11 79.94 169.34 80.77 169.21 C 81.60 169.08 82.37 169.65 82.50 170.48 C 93.50 241.62 95.24 304.09 87.58 356.16 C 81.22 399.33 75.58 450.16 82.11 499.92 C 83.16 507.92 84.46 516.07 85.97 524.05 C 86.12 524.86 85.59 525.64 84.78 525.80 C 84.67 525.82 84.57 525.83 84.46 525.82 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="104" stroke="none" target-height="356.74338" target-width="22.689995" target-x="72.55" target-y="169.08298" />
                <path d="M 168.74 84.37 C 168.74 142.79 145.90 215.11 84.37 215.11 C 22.84 215.11 0.00 145.33 0.00 84.37 C -0.00 37.77 37.77 0.00 84.37 0.00 C 130.97 -0.00 168.74 37.77 168.74 84.37 Z"
                  fill="#e55151" fill-rule="nonzero" group-id="1" node-id="106" stroke="none" target-height="215.11" target-width="168.74" target-x="0" target-y="0" />
                <path
                  d="M 2.63 90.47 C 2.63 43.87 40.40 6.10 87.00 6.10 C 116.00 6.10 141.51 18.69 156.70 40.92 C 137.17 8.43 98.37 -7.05 61.83 3.08 C 25.30 13.21 0.01 46.46 0.00 84.37 C 0.00 118.91 7.34 156.28 24.89 182.19 C 9.24 156.53 2.63 123.23 2.63 90.47 Z"
                  fill="#ed6b6b" fill-rule="nonzero" group-id="1" node-id="108" stroke="none" target-height="189.23987" target-width="156.7" target-x="0" target-y="-7.0498643" />
                <path
                  d="M 84.37 205.50 C 24.60 205.50 1.35 141.67 0.06 82.00 C 0.00 82.81 0.00 83.59 0.00 84.37 C 0.00 145.37 22.84 215.11 84.37 215.11 C 145.90 215.11 168.74 142.79 168.74 84.37 C 168.74 83.56 168.74 82.75 168.68 81.94 C 167.36 139.37 144.09 205.50 84.37 205.50 Z"
                  fill="#d33737" fill-rule="nonzero" group-id="1" node-id="110" stroke="none" target-height="133.17" target-width="168.74" target-x="0" target-y="81.94" />
                <g node-id="128">
                  <path
                    d="M 50.37 88.67 C 49.97 95.63 49.21 102.57 48.09 109.45 C 47.19 109.64 46.27 109.70 45.35 109.63 C 44.37 109.68 43.38 109.56 42.44 109.27 C 42.78 102.22 43.63 95.20 44.99 88.27 C 45.90 88.27 46.81 88.18 47.91 88.18 C 48.74 88.28 49.56 88.44 50.37 88.67 Z M 59.93 79.11 C 60.12 83.21 60.39 87.31 60.57 91.41 C 63.12 91.77 65.57 92.23 67.95 92.59 C 67.93 94.46 67.59 96.31 66.95 98.06 C 64.88 98.04 62.80 97.89 60.75 97.60 C 60.94 105.08 61.12 112.82 61.12 120.84 C 60.15 121.13 59.13 121.25 58.12 121.20 C 57.12 121.27 56.11 121.21 55.12 121.02 C 54.38 106.08 54.00 92.14 54.00 79.29 C 54.98 79.03 55.99 78.88 57.00 78.83 C 57.98 78.79 58.97 78.89 59.93 79.11 Z M 76.61 102.11 C 76.59 106.50 76.31 110.88 75.79 115.23 C 74.82 115.52 73.80 115.65 72.79 115.60 C 71.83 115.69 70.87 115.47 70.06 114.96 C 69.96 110.57 70.23 106.18 70.88 101.84 C 71.88 101.72 72.88 101.66 73.88 101.65 C 74.81 101.66 75.72 101.80 76.61 102.07 Z M 80.26 69.39 C 80.07 68.03 79.89 66.57 79.80 65.11 C 81.94 64.74 84.10 64.56 86.27 64.57 C 86.54 66.20 86.82 67.85 87.00 69.49 C 91.74 69.58 96.48 69.67 101.21 69.67 C 101.49 67.67 101.85 65.84 102.21 64.02 C 103.21 64.02 104.30 63.93 105.58 63.93 C 106.53 63.97 107.48 64.12 108.40 64.38 C 108.31 66.20 108.13 68.03 107.95 69.67 C 110.41 69.67 112.87 69.76 115.24 69.76 L 115.24 72.31 C 115.26 73.32 115.13 74.33 114.87 75.31 L 107.22 75.31 C 107.04 76.67 106.76 77.95 106.58 79.14 C 105.53 79.38 104.46 79.47 103.39 79.41 C 102.31 79.47 101.22 79.32 100.20 78.95 C 100.29 77.68 100.38 76.40 100.48 75.31 C 95.92 75.31 91.64 75.31 87.81 75.22 C 87.99 76.77 88.08 78.22 88.26 79.50 C 86.28 79.86 84.27 80.04 82.26 80.05 C 81.81 78.46 81.44 76.85 81.17 75.22 L 71.42 75.22 C 71.16 74.24 71.06 73.23 71.14 72.22 C 71.12 71.26 71.28 70.30 71.60 69.39 Z M 113.88 82.70 C 114.06 85.25 114.15 87.89 114.15 90.70 C 114.15 92.92 114.00 95.15 113.70 97.35 C 110.59 97.74 107.45 97.89 104.31 97.81 C 92.83 97.81 82.99 97.62 74.79 97.08 C 74.51 94.36 74.39 91.62 74.42 88.88 C 74.43 86.78 74.55 84.68 74.79 82.59 C 80.44 82.41 87.27 82.32 95.29 82.31 C 102.67 82.29 108.87 82.48 113.88 82.66 Z M 118.44 101.56 C 118.71 104.30 119.07 107.85 119.44 112.32 C 117.49 112.88 115.47 113.15 113.44 113.13 C 112.89 110.58 112.44 108.40 112.16 106.48 C 98.85 106.48 88.28 106.39 80.63 106.21 C 80.29 104.74 80.14 103.24 80.17 101.74 C 85.28 101.47 90.17 101.29 94.75 101.29 C 102.00 101.25 109.87 101.34 118.44 101.52 Z M 80.26 93.23 L 108.00 93.23 L 108.00 86.76 L 102.26 86.76 C 102.17 88.35 101.95 89.94 101.62 91.50 C 100.76 91.70 99.87 91.79 98.98 91.77 C 98.14 91.87 97.29 91.64 96.61 91.13 C 96.59 89.67 96.68 88.21 96.88 86.76 L 91.10 86.76 C 91.02 88.36 90.80 89.94 90.46 91.50 C 89.60 91.70 88.71 91.79 87.82 91.77 C 86.98 91.87 86.13 91.64 85.45 91.13 C 85.44 89.67 85.53 88.21 85.72 86.76 L 80.26 86.76 Z M 94.00 117.00 C 94.20 117.74 94.30 118.51 94.28 119.28 C 94.27 120.01 94.21 120.75 94.10 121.47 C 92.60 121.77 91.07 121.89 89.54 121.83 C 88.26 121.83 87.17 121.83 86.26 121.74 L 86.26 123.93 L 89.36 123.93 C 90.88 123.90 92.40 123.99 93.91 124.20 C 94.11 124.91 94.20 125.65 94.19 126.39 C 94.19 127.09 94.13 127.79 94.00 128.48 C 92.37 128.74 90.73 128.87 89.08 128.85 C 87.99 128.85 87.08 128.76 86.35 128.76 C 86.35 129.49 86.44 130.22 86.44 130.85 C 88.64 131.16 90.87 131.31 93.09 131.31 C 97.47 131.31 100.47 131.04 102.09 130.49 C 102.09 128.39 101.99 122.93 101.81 114.00 C 97.07 113.72 92.43 113.36 88.05 112.81 C 88.01 111.28 88.17 109.75 88.51 108.26 C 94.98 108.44 101.17 108.80 107.19 109.35 C 107.94 112.57 108.27 115.88 108.19 119.19 C 108.27 124.45 108.09 129.71 107.64 134.95 C 105.27 135.87 100.71 136.33 93.97 136.32 C 89.70 136.39 85.44 136.11 81.22 135.50 C 80.76 131.67 80.40 126.94 80.22 121.29 C 80.25 118.08 80.52 114.88 81.04 111.72 L 86.23 111.72 L 86.23 116.82 C 87.23 116.82 88.42 116.73 89.78 116.73 C 91.19 116.71 92.60 116.80 94.00 117.00 Z"
                    fill="#ffffff" fill-opacity="0.1" fill-rule="nonzero" group-id="1,2" node-id="114" stroke="none" target-height="72.456215" target-width="77" target-x="42.44" target-y="63.93" />
                </g>
                <path
                  d="M 74.00 225.47 C 71.74 225.53 69.63 224.31 68.56 222.31 C 67.80 221.04 67.57 219.52 67.94 218.08 C 69.33 212.96 76.33 213.94 80.09 214.47 L 81.22 214.62 C 83.11 214.85 84.79 215.11 86.33 215.44 C 86.88 215.15 87.41 214.84 87.92 214.50 C 88.34 214.23 88.70 214.00 88.92 213.90 C 90.04 213.35 91.06 212.90 92.05 212.46 C 93.70 211.73 95.41 211.14 97.16 210.69 C 97.68 210.56 102.38 209.47 105.16 211.36 C 106.20 212.06 106.89 213.17 107.05 214.42 C 107.31 216.15 106.74 217.91 105.51 219.15 C 103.34 221.40 99.51 222.15 96.89 221.89 C 93.29 221.43 89.80 220.37 86.55 218.75 C 86.37 218.91 86.21 219.07 86.12 219.16 L 85.82 219.45 C 83.47 221.45 80.30 223.96 76.60 225.07 C 75.76 225.33 74.88 225.46 74.00 225.47 Z M 75.13 217.00 C 73.13 217.00 71.23 217.39 70.84 218.84 C 70.69 219.50 70.81 220.19 71.16 220.77 C 72.07 222.34 73.61 222.77 75.74 222.16 C 78.43 221.22 80.90 219.76 83.02 217.86 C 82.34 217.76 81.63 217.66 80.88 217.57 L 79.69 217.41 C 78.18 217.17 76.66 217.04 75.13 217.00 Z M 89.76 216.86 C 92.12 217.90 94.62 218.57 97.18 218.86 C 99.18 219.05 102.01 218.42 103.35 217.03 C 103.94 216.44 104.21 215.60 104.07 214.78 C 104.04 214.37 103.82 214.00 103.48 213.78 C 102.32 213.00 99.78 213.07 97.87 213.54 C 96.28 213.96 94.72 214.50 93.21 215.16 C 92.28 215.55 91.31 216.00 90.21 216.53 C 90.05 216.64 89.90 216.76 89.76 216.89 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="117" stroke="none" target-height="16.057999" target-width="39.73964" target-x="67.573524" target-y="209.47" />
                <path
                  d="M 77.47 238.50 C 76.88 238.49 76.36 238.14 76.12 237.60 C 75.88 237.07 75.98 236.44 76.36 236.00 C 84.57 226.90 84.17 218.00 84.17 217.95 C 84.12 217.12 84.76 216.42 85.58 216.37 C 86.40 216.34 87.10 216.97 87.16 217.79 C 87.16 218.20 87.62 227.99 78.59 238.01 C 78.30 238.32 77.90 238.50 77.47 238.50 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="119" stroke="none" target-height="22.160858" target-width="11.738007" target-x="75.881996" target-y="216.34099" />
                <path
                  d="M 112.61 234.85 L 112.44 234.85 C 90.89 232.40 85.35 220.33 85.13 219.85 C 84.81 219.10 85.16 218.23 85.90 217.90 C 86.65 217.57 87.52 217.89 87.87 218.63 C 87.94 218.78 93.10 229.63 112.78 231.90 C 113.61 231.95 114.24 232.66 114.19 233.49 C 114.15 234.31 113.44 234.95 112.61 234.90 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="121" stroke="none" target-height="17.38031" target-width="29.428108" target-x="84.813835" target-y="217.56664" />
                <path
                  d="M 80.24 218.62 C 79.57 218.62 78.98 218.18 78.80 217.54 C 78.61 216.89 78.87 216.21 79.44 215.85 C 83.13 213.79 87.49 213.31 91.54 214.51 C 92.08 214.64 92.50 215.05 92.64 215.59 C 92.78 216.12 92.61 216.69 92.21 217.06 C 91.81 217.44 91.23 217.57 90.71 217.39 C 87.48 216.43 84.00 216.79 81.03 218.39 C 80.80 218.54 80.52 218.62 80.24 218.62 Z"
                  fill="#000000" fill-rule="nonzero" group-id="1" node-id="123" stroke="none" target-height="5.3141785" target-width="14.166504" target-x="78.61151" target-y="213.30879" />
                <path
                  d="M 95.52 218.28 C 95.64 220.28 91.64 218.51 86.66 218.80 C 81.68 219.09 77.59 221.34 77.48 219.32 C 77.37 217.30 81.30 215.44 86.29 215.15 C 91.28 214.86 95.41 216.26 95.52 218.28 Z"
                  fill="#d33737" fill-rule="nonzero" group-id="1" node-id="125" stroke="none" target-height="6.4799957" target-width="18.269997" target-x="77.37" target-y="214.86" />
              </g>
            </svg>
            <p class="text-gray-600 text-sm dark:text-gray-400">未查询到结果,换个姿势搜索吧~~</p>
          </div>

        </div>

        <!-- Modal footer -->
        <div class="flex items-center p-4 md:p-5 border-t text-xs flex items-center text-gray-400 dark:border-gray-600">
          <!-- Esc 退出提示 -->
          <span class="px-2 py-[1px] flex-none border rounded ">Esc</span>
          <span class="text-gray-400 ml-2">关闭</span>

          <!-- 底层技术介绍 -->
          <span class="ml-auto  ">
            基于
            <a href="https://lucene.apache.org/" target="_blank" class="underline ">Apache Lucene</a>
            全文检索引擎开发
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onBeforeUnmount, watch } from 'vue'
import { initCollapses, initDropdowns, initModals, Modal } from 'flowbite'
import { useBlogSettingsStore } from '@/stores/blogsettings'
import { useUserStore } from '@/stores/user'
import { useRouter, useRoute } from 'vue-router'
import { showMessage } from '@/composales/utils'
import { getArticleSearchPageList } from '@/api/frontend/search'
import { useDark, useToggle } from '@vueuse/core'

const router = useRouter()
const route = useRoute()
// 初始化 flowbit 相关组件
const searchModal = ref(null)
const searchInputRef = ref(null)

const isDark = useDark()
const toggleDark = useToggle(isDark)

// 文章搜索结果
const searchArticles = ref([])
// 当前页码，给了一个默认值 1
const current = ref(1)
// 总数据量，给了个默认值 0
const total = ref(0)
// 每页显示的数据量，给了个默认值 10
const size = ref(10)
// 总共多少页
const pages = ref(0)
// 搜索关键词
const searchWord = ref('')

// 搜索弹框
const modalOptions = {
  placement: 'top-right', // 弹框位置
  backdrop: 'dynamic',
  backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-10',
  closable: true,
  onHide: () => {
    console.log('modal is hidden')
  },
  onShow: () => {
    console.log('modal is shown')
  },
  onToggle: () => {
    console.log('modal has been toggled')
  },
}

// 点击搜索框
const clickSearchBtn = () => {
  // 显示搜索弹框
  searchModal.value.show()

  // 激活搜索框
  searchInputRef.value.focus()
}

// instance options object
const instanceOptions = {
  id: 'searchModalEl',
  override: true,
}

// 初始化 flowbit 相关组件
onMounted(() => {
  initCollapses()
  initDropdowns()
  initModals()

  // 初始化
  const $modalElement = document.querySelector('#search-modal')
  searchModal.value = new Modal($modalElement, modalOptions, instanceOptions)

  // 注册键盘事件监听器
  window.addEventListener('keydown', handleKeyDown)
})

onBeforeUnmount(() => {
  // 在组件销毁前移除事件监听器，防止内存泄漏
  window.removeEventListener('keydown', handleKeyDown)
})

// 键盘监听
const handleKeyDown = (event) => {
  // 检查是否按了 Ctrl + k
  if (event.ctrlKey && event.key === 'k') {
    // 阻止激活浏览器本身的搜索框
    event.preventDefault()
    console.log('ctrl k 被按了')

    // 显示搜索弹框
    searchModal.value.show()

    // 激活搜索框
    searchInputRef.value.focus()
  }
}

// 当前路由地址
const currPath = ref(route.path)

// 引入博客设置信息 store
const blogSettingsStore = useBlogSettingsStore()

// 是否登录，通过 userStore 中的 userInfo 对象是否有数据来判断
const userStore = useUserStore()
// 获取 userInfo 对象所有属性名称的数组
const keys = Object.keys(userStore.userInfo)
// 若大于零，则表示用户已登录
const isLogined = ref(keys.length > 0)

// 退出登录
const logout = () => {
  userStore.logout()
  // 标记为未登录
  isLogined.value = false
  showMessage('退出登录成功')
}

// 侦听属性，监听 searchWord 变量变化
watch(searchWord, (newText, oldText) => {
  if (newText && newText !== oldText) {
    // 若搜索关键词不为空，且和之前的值不相同
    renderSearchArticles({
      current: current.value,
      size: size.value,
      word: newText,
    })
  } else if (newText == '') {
    // 搜索词为空
    // 置空
    searchArticles.value = []
  }
})

// 搜索 Loading
const searchLoading = ref(false)
// 请求后台接口
function renderSearchArticles(data) {
  // 显示加载 Loading
  searchLoading.value = true
  getArticleSearchPageList(data)
    .then((res) => {
      if (res.success) {
        searchArticles.value = res.data
        current.value = res.current
        size.value = res.size
        total.value = res.total
        pages.value = res.pages
      }
    })
    .finally(() => (searchLoading.value = false)) // 隐藏loading
}

// 渲染下一页搜索结果
const nextPage = () => {
  renderSearchArticles({
    current: current.value + 1,
    size: size.value,
    word: searchWord.value,
  })
}

// 渲染上一页搜索结果
const prePage = () => {
  renderSearchArticles({
    current: current.value - 1,
    size: size.value,
    word: searchWord.value,
  })
}

// 点击搜索结果，跳转文章详情页
const jumpToArticleDetailPage = (articleId) => {
  // 隐藏搜索对话框
  searchModal.value.hide()
  // 路由跳转
  router.push('/article/' + articleId)
}
</script>

<style scoped>
.vt-switch {
  --vt-c-divider-light-1: rgba(60, 60, 60, 0.29);
  --vt-c-divider: var(--vt-c-divider-light-1);
  --vt-c-white-mute: #f1f1f1;
  --vt-c-bg-mute: var(--vt-c-white-mute);
  position: relative;
  border-radius: 11px;
  display: block;
  width: 40px;
  height: 22px;
  flex-shrink: 0;
  border: 1px solid var(--vt-c-divider);
  background-color: var(--vt-c-bg-mute);
  transition: border-color 0.25s, background-color 0.25s;
}

.dark .vt-switch {
  --vt-c-white-mute: #f1f1f1;
  background-color: #2f2f2f;
  transition: border-color 0.25s, background-color 0.25s;
}

.vt-switch-check {
  --vt-c-white: #ffffff;
  --vt-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  position: absolute;
  top: 1px;
  left: 1px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-1);
  transition: background-color 0.25s, transform 0.25s;
}

.dark .vt-switch-appearance .vt-switch-check {
  transform: translate(18px);
}

.dark .vt-switch-check {
  --vt-c-black: #1a1a1a;
  background-color: var(--vt-c-black);
}

.vt-switch-icon {
  position: relative;
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  overflow: hidden;
}

.vt-switch-icon svg {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 12px;
  height: 12px;
  fill: rgba(60, 60, 60, 0.7);
}

.dark .vt-switch-icon svg {
  fill: rgba(255, 255, 255, 0.87);
  transition: opacity 0.25s;
}

.dark .vt-switch-appearance-moon {
  opacity: 1;
}

.vt-switch-appearance-sun {
  opacity: 1;
}
</style>

