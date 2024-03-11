import { defineStore } from 'pinia'

import { ref } from 'vue'

export const useCommentStore = defineStore('comme', () => {
    // 评论用户信息
    const userInfo = ref({})

    return { userInfo }
}, {
    // 开启持久化
    persist: true,
})