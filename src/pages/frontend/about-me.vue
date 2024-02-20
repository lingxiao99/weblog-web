<template>

  <Header></Header>
  <main class="admin-container container">
    <div class="e-card playing ">
      <div class="image"></div>

      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="infotop">
        <div class="flex items-center   ">
          <div class="  m-5 w-[200px] h-[200px]   ">
            <img class="rounded-full  " src='/src/assets/2023-1.jpg'>
          </div>

          <div class="  ml-4">
            <h1 class="mb-2 text-lg  ">姓名: 张三</h1>
            <h1 class="mb-2 text-lg">年龄: 21或者24</h1>
            <h1 class="mb-2 text-lg">性别: 糙汉子</h1>
          </div>
        </div>
      </div>

    </div>

    <div style=" width: 1228px;   " class="mx-auto  bg-white    border border-gray-200 rounded-lg shadow-md bg-cover dark:bg-gray-800 dark:border-gray-700  ">
      123456
    </div>

    <div style=" width: 1228px;   " class="mx-auto  bg-white    border border-gray-200 rounded-lg shadow-md bg-cover dark:bg-gray-800 dark:border-gray-700  ">
      123456
    </div>

    <div style=" width: 1228px;   " class="mx-auto  bg-white    border border-gray-200 rounded-lg shadow-md bg-cover dark:bg-gray-800 dark:border-gray-700  ">
      123456
    </div>
  </main>

  <Footer></Footer>

</template>

<script setup >
import Header from '@/layouts/frontend/components/Header.vue'
import Footer from '@/layouts/frontend/components/Footer.vue'
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

.custom-background {
  position: relative;
  min-height: 100vh;
  overflow: hidden; /* 确保伪元素不会超出容器边界 */
}
</style>

<style>
/* ////////////////// */
.e-card {
  margin: 100px auto;

  position: relative;
  width: 1278px;
  height: 300px;
  border-radius: 16px;
  overflow: hidden;
  top: -80px;
}

.wave {
  position: absolute;
  width: 1800px;
  height: 1500px;
  opacity: 0.6;
  left: 0;
  top: 0;
  margin-left: -20%;
  margin-top: -10%;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
}

/* .icon {
  width: 3em;
  margin-top: -1em;
  padding-bottom: 1em;
} */

.infotop {
  text-align: center;
  font-size: 6px;
  position: absolute;
  top: 5.6em;
  left: 0;
  right: 0;
  color: rgb(255, 255, 255);
  font-weight: 600;
}

.wave:nth-child(2),
.wave:nth-child(3) {
  top: 210px;
}

.playing .wave {
  border-radius: 40%;
  animation: wave 6000ms infinite linear;
}

.wave {
  border-radius: 40%;
  animation: wave 55s infinite linear;
}

.playing .wave:nth-child(2) {
  animation-duration: 90000ms;
}

.wave:nth-child(2) {
  animation-duration: 50s;
}

.playing .wave:nth-child(3) {
  animation-duration: 10000ms;
}

.wave:nth-child(3) {
  animation-duration: 45s;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* ////////////////////////////////
 */
</style>