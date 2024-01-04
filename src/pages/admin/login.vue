<template>
  <div class="grid grid-cols-2 h-screen">
    <!-- 默认占两列，order 用于指定排列顺序，md 用于适配非移动端（PC 端） -->
    <div class="col-span-2 order-2 p-10 md:col-span-1 md:order-1 bg-slate-900 animate__animated animate__bounceInLeft animate__fast">
      <!-- 指定为 flex 布局，并设置为屏幕垂直水平居中，高度为 100% -->
      <div class="flex justify-center items-center h-full flex-col">
        <h2 class="font-bold text-4xl mb-7 text-white">Weblog 博客登录</h2>
        <p class="text-white">一款由 Spring Boot + Mybaits Plus + Vue 3.2 + Vite 4 开发的前后端分离博客。</p>
        <!-- 指定图片宽度为父级元素的 1/2 -->
        <img src="../../assets/123.png " class="w-1/2">
      </div>
    </div>
    <div class=" flex flex-col col-span-2 order-1 md:col-span-1 md:order-2 bg-white dark:bg-gray-800">
      <!-- 白天黑夜开关，ml-auto 靠右显示 -->

      <label class="switch ml-auto mt-4 mr-4 ">
        <input type="checkbox" v-model="isLight" @click="toggleDark()">
        <span class="slider"></span>
      </label>

      <!-- flex-col 用于指定子元素垂直排列 -->
      <!-- 登录  -->
      <div v-if="showCode" class="flex justify-center items-center h-full flex-col animate__animated animate__bounceInRight animate__fast">
        <!-- 大标题，设置字体粗细、大小、下边距 -->
        <h1 class="font-bold text-4xl mb-5 dark:text-white">欢迎登录</h1>
        <!-- 设置 flex 布局，内容垂直水平居中，文字颜色，以及子内容水平方向 x 轴间距 -->
        <div class="flex items-center justify-center mb-7 text-gray-400 space-x-2 dark:text-gray-500">
          <!-- 左边横线，高度为 1px, 宽度为 16，背景色设置 -->
          <span class="h-[1px] w-16 bg-gray-200 dark:bg-gray-700"></span>
          <span>账号密码登录</span>
          <!-- 右边横线 -->
          <span class="h-[1px] w-16 bg-gray-200 dark:bg-gray-700"></span>
        </div>
        <!-- 引入 Element Plus 表单组件，移动端设置宽度为 5/6，PC 端设置为 2/5 -->
        <el-form class="w-5/6 md:w-2/5" ref="formRef" :rules="rules" :model="form" @keyup.enter="onSubmit">
          <el-form-item prop="username">
            <!-- 输入框组件 -->
            <el-input size="large" v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
          </el-form-item>
          <el-form-item prop="password">
            <!-- 密码框组件 -->
            <el-input size="large" v-model="form.password" type="password" placeholder="请输入用户名" :prefix-icon="Lock" clearable show-password />
          </el-form-item>

          <el-form-item>
            <!-- 登录按钮，宽度设置为 100% -->
            <el-button class="w-full" size="large" :loading="loading" @click="onSubmit" type="primary">登录</el-button>

          </el-form-item>
          <el-form-item class="register-item">
            <!-- 注册按钮 -->
            <el-button class="w-full  " size="large" type="default" @click="onchange">注册</el-button>
          </el-form-item>

        </el-form>

      </div>
      <!-- 注册 -->
      <div v-else class="flex justify-center items-center h-full flex-col animate__animated animate__bounceInRight animate__fast">
        <!-- 大标题，设置字体粗细、大小、下边距 -->
        <h1 class="font-bold text-4xl mb-5 dark:text-white">欢迎注册</h1>
        <!-- 设置 flex 布局，内容垂直水平居中，文字颜色，以及子内容水平方向 x 轴间距 -->
        <div class="flex items-center justify-center mb-7 text-gray-400 space-x-2 dark:text-gray-500">
          <!-- 左边横线，高度为 1px, 宽度为 16，背景色设置 -->
          <span class="h-[1px] w-16 bg-gray-200 dark:bg-gray-700"></span>
          <span>请填写账号密码</span>
          <!-- 右边横线 -->
          <span class="h-[1px] w-16 bg-gray-200 dark:bg-gray-700"></span>
        </div>
        <!-- 引入 Element Plus 表单组件，移动端设置宽度为 5/6，PC 端设置为 2/5 -->

        <el-form class="w-5/6 md:w-2/5" ref="formRef">
          <el-form-item label="用户名" prop="username">
            <el-input size="large" v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input size="large" v-model="form.password" type="password" placeholder="请输入密码" :prefix-icon="Lock" clearable show-password />
          </el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input size="large" v-model="form.confirmPassword" type="password" placeholder="请再次输入密码" :prefix-icon="Lock" clearable show-password />
          </el-form-item>
          <el-form-item>
            <el-button class="w-full" size="large" :loading="loading" @click="onSubmit" type="primary">注册</el-button>
          </el-form-item>

          <el-form-item>
            <!-- 登录按钮，宽度设置为 100% -->
            <el-button class="w-full register-item" size="large" :loading="loading" @click="onchange" type="default">登录</el-button>
          </el-form-item>
        </el-form>

      </div>
    </div>
  </div>
</template>

<script setup>
// 引入 Element Plus 中的用户、锁图标
import { User, Lock } from '@element-plus/icons-vue'

import { login } from '@/api/admin/user'

import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { showMessage } from '@/composales/utils'

import { setToken } from '@/composales/cookie'
import { useUserStore } from '@/stores/user'
import { useDark, useToggle } from '@vueuse/core'

import 'element-plus/theme-chalk/dark/css-vars.css'

const router = useRouter()
const userStore = useUserStore()
const showCode = ref(true)

// 是否是白天
const isLight = ref(true)

//表单引用
const formRef = ref(null)

// 登录按钮加载
const loading = ref(false)

// 定义响应式的表单对象
const form = reactive({
  username: '',
  password: '',
})

// 表单验证规则
const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur',
    },
  ],
}

const onSubmit = () => {
  // 先验证 form 表单字段
  formRef.value.validate((valid) => {
    if (!valid) {
      console.log('表单验证不通过')
      return false
    }
    // 开始加载
    loading.value = true
    // 调用登录接口
    login(form.username, form.password)
      .then((res) => {
        // 判断是否成功
        if (res.success == true) {
          // 提示登录成功
          showMessage('登录成功')

          // 存储 Token 到 Cookie 中
          let token = res.data.token

          setToken(token)
          // 获取用户信息，并存储到全局状态中
          userStore.setUserInfo()

          // 跳转到后台首页
          router.push('/admin/index')
        } else {
          // 获取服务端返回的错误消息
          let message = res.message
          // 提示消息
          showMessage(message, 'error')
        }
      })
      .finally(() => {
        // 结束加载
        loading.value = false
      })
  })
}

const onchange = () => {
  showCode.value = !showCode.value
}

// 切换白天
const isDark = useDark({
  onChanged(dark) {
    // update the dom, call the API or something

    if (dark) {
      // 给 body 添加 class="dark"
      document.documentElement.classList.add('dark')
      // 设置 switch 的值
      isLight.value = false
    } else {
      // 移除 body 中添加 class="dark"
      document.documentElement.classList.remove('dark')
      isLight.value = true
    }
  },
})
const toggleDark = useToggle(isDark)
</script>

<style>
.register-item {
  margin-top: -10px;
}

/* The switch - the box around the slider */
.switch {
  display: block;
  --width-of-switch: 3.5em;
  --height-of-switch: 2em;
  /* size of sliding icon -- sun and moon */
  --size-of-icon: 1.4em;
  /* it is like a inline-padding of switch */
  --slider-offset: 0.3em;
  position: relative;
  width: var(--width-of-switch);
  height: var(--height-of-switch);
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f4f4f5;
  transition: 0.4s;
  border-radius: 30px;
}

.slider:before {
  position: absolute;
  content: '';
  height: var(--size-of-icon, 1.4em);
  width: var(--size-of-icon, 1.4em);
  border-radius: 20px;
  left: var(--slider-offset, 0.3em);
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(40deg, #ff0080, #e79b3e 70%);
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #303136;
}

input:checked + .slider:before {
  left: calc(100% - (var(--size-of-icon, 1.4em) + var(--slider-offset, 0.3em)));
  background: #303136;
  /* change the value of second inset in box-shadow to change the angle and direction of the moon  */
  box-shadow: inset -3px -2px 5px -2px #8983f7, inset -10px -4px 0 0 #a3dafb;
}
</style>