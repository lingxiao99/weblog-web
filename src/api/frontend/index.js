import  axios from "@/axios"

// 每日一言
export function  getEveryDay(){
    return axios.post("https://v1.hitokoto.cn/")
}