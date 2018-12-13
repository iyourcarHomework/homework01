
<template>
  <div>
    <div class="community-box" v-if="!iFEdit">
      <mt-header title="社区">
        <mt-button icon="more" slot="right" @click="toggleEdit"></mt-button>
      </mt-header>
      <mt-search style="width: 95%;height: 60px;margin: 5px auto;" v-model="searchValue"></mt-search>
    </div>
    <div class="edit-box" v-if="iFEdit">
      <edit-page @hideEdit="toggleEdit"></edit-page>
    </div>
  </div>
</template>

<script>
import editPage from "../edit_page/edit_page.vue"
export default {
  data() {
    return {
      searchValue: "",
      iFEdit: false
    };
  },
  methods: {
    toggleEdit() {
      this.iFEdit = !this.iFEdit;
    }
  },
  components: {
    editPage
  }
};
</script>

<style lang="less" scoped>
</style>
