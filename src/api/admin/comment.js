import axios from "@/axios";

// 获取评论分页数据
export function getCommentPageList (data) {
    return axios.post("/admin/comment/list", data)
}