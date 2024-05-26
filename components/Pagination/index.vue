<template>
  <div class="fr page">
    <div class="sui-pagination clearfix">
      <ul>
        <li class="prev disabled">
          <a :disable="pageNo == 1" @click="$emit('getPageNo',pageNo-1)">«上一页</a>
        </li>
        <!-- 把页码分为三部分 -->
        <!-- 上部分 -->
        <li :class="{active:pageNo == 1}" v-if="startNumAndEndNum.start > 1">
          <a @click="$emit('getPageNo',1)">1</a>
        </li>
        <li class="dotted" v-if="startNumAndEndNum.start > 2"><span>...</span></li>   
        <!-- 中部分 -->
        <li v-for="(page,index) in startNumAndEndNum.end" :key="index" :class="{active:pageNo == page}">
          <template  v-if="page >= startNumAndEndNum.start">
            <a @click="$emit('getPageNo',page)">{{page}}</a>
          </template>
        </li>
        <!-- 下部分 -->
        <li class="dotted" v-if="startNumAndEndNum.end < totalPage - 1"><span>...</span></li>
        <li v-if="startNumAndEndNum.end < totalPage" :class="{active:pageNo == totalPage}">
          <a @click="$emit('getPageNo',totalPage)">{{totalPage}}</a>
        </li>
        <li class="next">
          <a :disable="pageNo == totalPage" @click="$emit('getPageNo',pageNo+1)">下一页»</a>
        </li>
      </ul>
      <div><span>共{{total}}条&nbsp;</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pagination-c',
  props:['pageNo','pageSize','total','continues'],
  computed:{
    totalPage(){
      // 向上取整
      return Math.ceil(this.total/this.pageSize)
    },
    // 计算出连续页码的起始数值与结束数值
    startNumAndEndNum(){
      // 先解构出来，后面就不用this
      const {pageNo,continues,totalPage} = this
      // 先定义两个变量存储起始值与结束值
      let start = 0, end = 0;
      // 连续页码数字为5（至少5页）
      // 如果不够5页
      if (continues > totalPage) {
        start = 1,
        end = totalPage
      } else {
        // 够5页
        // parseInt功能之一：四舍五入取整
        start = pageNo - parseInt(continues/2);
        end = pageNo + parseInt(continues/2)
        // 又要考虑计算出的起始页小于1的情况
        if (start < 1) {
          start = 1
          end = continues
        }
        // 又要考虑结束值大于总页数的情况
        if (end > totalPage) {
          end = totalPage
          start = totalPage - continues + 1
        }
      }
      return {start, end}
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  // float: right;
  float: left;

  .sui-pagination {
    text-align: center;
    margin: 18px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      // width: 490px;
      width: auto;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }

    div {
      color: #333;
      font-size: 14px;
      float: right;
      width: 241px;
    }
  }
}
</style>