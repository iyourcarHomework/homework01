
<template>
  <div class="study-box">
    <mt-header title="学习" style="position: fixed;top: 0; width: 100%;z-index: 9999;"></mt-header>
    <!-- 学习资料列表 -->
    <div class="study-resource">
      <div
        class="study-resource-item"
        v-for="(item, index) in studyResources"
        :key="index"
        @click="downLoadStudyResource"
      >{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studyResources: [
        {
          name: "C语言课件"
        },
        {
          name: "java课件"
        },
        {
          name: "mySql课件"
        },
        {
          name: "前端课程资料"
        },
        {
          name: "node书籍"
        },
        {
          name: "C语言课件"
        },
        {
          name: "java课件"
        },
        {
          name: "mySql课件"
        },
        {
          name: "前端课程资料"
        },
        {
          name: "node书籍"
        },
        {
          name: "C语言课件"
        },
        {
          name: "java课件"
        },
        {
          name: "mySql课件"
        },
        {
          name: "前端课程资料"
        },
        {
          name: "node书籍"
        },
        {
          name: "C语言课件"
        },
        {
          name: "java课件"
        },
        {
          name: "mySql课件"
        },
        {
          name: "前端课程资料"
        },
        {
          name: "node书籍"
        }
      ]
    };
  },
  methods: {
    /**
     * 瞎子啊学习资料
     */
    downLoadStudyResource() {}
  }
};
</script>

<style lang="less" scoped>
.study-resource {
  width: 98%;
  box-sizing: border-box;
  padding: 50px 10px;
  margin: 10px auto;
  border-top: 1px solid rgb(231, 228, 228);
  &-item {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid rgb(231, 228, 228);
    text-align: left;
    font-weight: bold;
    &::after {
      content: "";
      width: 25px;
      height: 25px;
      position: absolute;
      top: 20px;
      right: 10px;
      background: url("../../../public/icons/download.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
