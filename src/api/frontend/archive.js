import axios from "@/axios";

// 获取文章归档分页数据
export function getArchivePageList (data) {
  return axios.post("/archive/list", data)
}


// 获取文章归档分页数据
export function getArchiveNewPageList () {
  return axios.post("/archive/newList",)
}