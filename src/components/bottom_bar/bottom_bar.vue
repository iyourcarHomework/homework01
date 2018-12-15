<template>
  <div class="bottom-bar">
    <mt-tabbar v-model="selected" style="position: fixed; bottom: 0;left: 0;">
      <mt-tab-item id="community">
        <img slot="icon" src="../../../public/icons/community.png">
        社区
      </mt-tab-item>
      <mt-tab-item id="class">
        <img slot="icon" src="../../../public/icons/class.png">
        班级
      </mt-tab-item>
      <mt-tab-item id="study">
        <img slot="icon" src="../../../public/icons/studying.png">
        学习
      </mt-tab-item>
      <mt-tab-item id="home">
        <img slot="icon" src="../../../public/icons/user.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "study"
    };
  },
  watch: {
    selected(val) {
      this.$emit("bottomChange", val);
    }
  }
};
</script>

<style scoped>
</style>
