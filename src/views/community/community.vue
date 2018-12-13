
<template>
  <div class="community-box">
    <mt-header title="社区">
      <!-- <mt-button
        icon="search"
        slot="right"
        style="z-index:9999;"
        @click="() => {this.isSearch = !this.isSearch}"
      ></mt-button> -->
    </mt-header>
    <mt-search style="width: 95%;height: 60px;margin: 5px auto;" v-model="searchValue"></mt-search>
    <!-- 发表 -->
    <div class="publish">
      <textarea name id cols="47" rows="9" placeholder="编辑您要发布的信息..."></textarea>
      <div class="publish-bottom">
        <mt-button size="large" type="primary">发表</mt-button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
      isSearch: false
    };
  },
  methods: {
    hideSearch() {
      if (this.isSearch) {
        this.isSearch = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.publish {
  height: 100%;
  width: 95%;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin: 0px auto;
  padding-bottom: 10px;
  textarea {
    margin: 10px auto;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    box-sizing: border-box;
    outline: none;
  }
  &-bottom {
    width: 96%;
    height: 40px;
    margin: 0 auto;
  }
}
</style>
