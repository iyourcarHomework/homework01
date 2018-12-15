<template>
  <div class="edit-box">
    <mt-header title="编辑发表">
      <mt-button icon="back" slot="left" @click.stop="back"></mt-button>
    </mt-header>
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
  name: 'homePage',
  data() {
    return {};
  },
  methods: {
    back(){
      this.$emit('hideEdit');
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
  margin: 10px auto;
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
