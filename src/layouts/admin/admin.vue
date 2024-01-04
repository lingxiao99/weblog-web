<template>
  <!-- 外层容器 -->
  <el-container>

    <!-- 左边侧边栏 -->
    <el-aside :width='menuStore.menuWidth' class="transition-all">
      <AdminMenu></AdminMenu>
    </el-aside>

    <!-- 右侧内容 -->
    <el-container class="admin-container">

      <el-header>
        <AdminHeader></AdminHeader>
      </el-header>

      <!-- 主容器 -->
      <el-main>
        <!-- 标签导航栏 -->
        <AdminTagList></AdminTagList>
        <!-- 主内容（根据路由动态展示不同页面） -->
        <!-- 主内容（根据路由动态展示不同页面） -->
        <router-view v-slot="{ Component }">
          <Transition name="fade">
            <!-- max 指定最多缓存 10 个组件 -->
            <KeepAlive :max="10">
              <component :is="Component"></component>
            </KeepAlive>
          </Transition>

        </router-view>
      </el-main>

      <el-footer>
        <AdminFooter></AdminFooter>
      </el-footer>
    </el-container>

  </el-container>
</template>

<script setup>
import AdminFooter from './components/AdminFooter.vue'
import AdminHeader from './components/AdminHeader.vue'
import AdminMenu from './components/AdminMenu.vue'
import AdminTagList from './components/AdminTagList.vue'
import { useMenuStore } from '@/stores/menu'
import { onMounted } from 'vue'

const menuStore = useMenuStore()

onMounted(() => {
  //移出 html 标签中的 class='dark'
  document.documentElement.classList.remove('dark')
})
</script>

<style scope>
.admin-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.el-header {
  padding: 0 !important;
}

.el-footer {
  padding: 0 !important;
}

/* 内容区域过渡动画：淡入淡出效果 */
/* 刚开始进入时 */
.fade-enter-from {
  /* 透明度 */
  opacity: 0;
}

/* 刚开始结束 */
.fade-enter-to {
  opacity: 1;
}

/* 刚开始离开 */
.fade-leave-from {
  opacity: 1;
}

/* 离开已结束 */
.fade-leave-to {
  opacity: 0;
}

/* 离开进行中 */
.fade-leave-active {
  transition: all 0.2s;
}

/* 进入进行中 */
.fade-enter-active {
  transition: all 0.2s;
  transition-delay: 0.2s;
}
</style>