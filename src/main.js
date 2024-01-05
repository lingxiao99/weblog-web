import '@/assets/main.css'
import 'animate.css';

import { createApp } from 'vue'
import App from '@/App.vue'
// 导入路由
import router from '@/router'
// 导入全局路由守卫
import '@/permission'

// 导入 Element Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'nprogress/nprogress.css'
// 引入全局状态管理 Pinia
import pinia from '@/stores'

//图片点击放大
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'

//鼠标点击效果
import ClickWords from '@/components/ClickWords.vue'


const app = createApp(App)



// 应用路由
app.use(router)

// 应用 Pinia
app.use(pinia)

app.use(VueViewer)

app.component('ClickWords', ClickWords)

// 引入图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
