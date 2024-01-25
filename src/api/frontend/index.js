import  axios from "@/axios"

// 每日一言---弃用
// export function  getEveryDay(){
//     return axios.get("https://v1.hitokoto.cn/")
// }

// 诗句
export function  getVerse(){
    return axios.get("https://api.apiopen.top/api/sentences")
}