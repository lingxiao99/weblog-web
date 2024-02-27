import axios from "@/axios";

// 获取知识库列表
export function getWikiList () {
    return axios.post("/wiki/list")
}


// 获取知识库文章上下页
export function getWikiArticlePreNext (data) {
    return axios.post("/wiki/article/preNext", data)
}