<template>
  <div>
    <!-- 表头分页查询条件， shadow="never" 指定 card 卡片组件没有阴影 -->
    <el-card shadow="never" class="mb-5">
      <!-- flex 布局，内容垂直居中 -->
      <div class="flex items-center">
        <el-text>路由地址</el-text>
        <div class="ml-3 w-52 mr-5"><el-input v-model="searchRouterUrl" placeholder="请输入（模糊查询）" clearable />
        </div>

        <el-text>创建日期</el-text>
        <div class="ml-3 w-30 mr-5">
          <!-- 日期选择组件（区间选择） -->
          <el-date-picker v-model="pickDate" type="daterange" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" size="default" :shortcuts="shortcuts" @change="datepickerChange" />
        </div>

        <el-text>状态</el-text>
        <div class="ml-3 w-30 mr-5">
          <el-select v-model="status" placeholder="---请选择---">
            <el-option v-for="item in statusOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>

        <el-button type="primary" class="ml-3" :icon="Search" @click="getTableData">查询</el-button>
        <el-button class="ml-3" :icon="RefreshRight" @click="reset">重置</el-button>
      </div>
    </el-card>

    <el-card shadow="never">
      <!-- 分页列表 -->
      <el-table :data="tableData" border stripe v-loading="tableLoading" table-layout="auto">
        <el-table-column type="index" label="序号" width="60" />
        <el-table-column prop="routerUrl" label="路由">
          <template #default="scope">
            <el-link type="primary" :href="'#' + scope.row.routerUrl" target="_blank">{{ scope.row.routerUrl
                            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="avatar" label="头像" width="60">
          <template #default="scope">
            <el-avatar :size="40" :src="scope.row.avatar" />
          </template>
        </el-table-column>
        <el-table-column prop="nickname" label="昵称" />
        <el-table-column prop="content" label="评论内容" />
        <el-table-column prop="createTime" label="发布时间" width="200" />
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag type="warning" v-if="scope.row.status == 1">待审核</el-tag>
            <el-tag type="success" v-else-if="scope.row.status == 2">正常</el-tag>
            <el-tag type="danger" v-else-if="scope.row.status == 3">审核不通过</el-tag>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template #default="scope">

            <el-tooltip class="box-item" effect="dark" content="详情" placement="bottom">
              <el-button size="small" :icon="Tickets" circle>
              </el-button>
            </el-tooltip>

            <el-tooltip v-if="scope.row.status == 1" class="box-item" effect="dark" content="审核" placement="bottom">
              <el-button size="small" :icon="Edit" circle>
              </el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="dark" content="删除" placement="bottom">
              <el-button type="danger" size="small" :icon="Delete" circle>
              </el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="mt-10 flex justify-center">
        <el-pagination v-model:current-page="current" v-model:page-size="size" :page-sizes="[10, 20, 50]" :small="false" :background="true" layout="total, sizes, prev, pager, next, jumper"
          :total="total" @size-change="handleSizeChange" @current-change="getTableData" />
      </div>

    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { getCommentPageList } from '@/api/admin/comment'
import {
  Search,
  RefreshRight,
  Delete,
  Edit,
  Tickets,
} from '@element-plus/icons-vue'
import moment from 'moment'

// 模糊搜索的路由
const searchRouterUrl = ref('')
// 日期
const pickDate = ref('')

// 查询条件：开始结束时间
const startDate = reactive({})
const endDate = reactive({})

// 监听日期组件改变事件，并将开始结束时间设置到变量中
const datepickerChange = (e) => {
  startDate.value = moment(e[0]).format('YYYY-MM-DD')
  endDate.value = moment(e[1]).format('YYYY-MM-DD')

  console.log('开始时间：' + startDate.value + ', 结束时间：' + endDate.value)
}

const shortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

// 当前选择的评论状态
const status = ref(null)
// 评论状态 select
const statusOptions = [
  {
    value: 1,
    label: '待审核',
  },
  {
    value: 2,
    label: '正常',
  },
  {
    value: 3,
    label: '审核未通过',
  },
]

// 重置
const reset = () => {
  pickDate.value = ''
  startDate.value = null
  endDate.value = null
  searchRouterUrl.value = ''
  status.value = null
}

// 表格加载 Loading
const tableLoading = ref(false)
// 表格数据
const tableData = ref([])
// 当前页码，给了一个默认值 1
const current = ref(1)
// 总数据量，给了个默认值 0
const total = ref(0)
// 每页显示的数据量，给了个默认值 10
const size = ref(10)

// 获取分页数据
function getTableData() {
  // 显示表格 loading
  tableLoading.value = true
  // 调用后台分页接口，并传入所需参数
  getCommentPageList({
    current: current.value,
    size: size.value,
    startDate: startDate.value,
    endDate: endDate.value,
    routerUrl: searchRouterUrl.value,
    status: status.value,
  })
    .then((res) => {
      if (res.success == true) {
        tableData.value = res.data
        current.value = res.current
        size.value = res.size
        total.value = res.total
      }
    })
    .finally(() => (tableLoading.value = false)) // 隐藏表格 loading
}
getTableData()
</script>
