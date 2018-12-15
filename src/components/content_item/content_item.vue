<template>
  <div class="content-item" @click="goToDetail">
    <div class="content-item__author">{{content.author}}</div>
    <div class="content-item__content">{{content.content}}</div>
    <div class="content-item__bottom">
      <div class="content-item__bottom-comment">
        <img src="../../../public/icons/comment.png">
        {{content.commentCount}}
      </div>
      <div class="content-item__bottom-star" @click.stop="startComment">
        <div :class="!ifStart ? 'bottom-img' : 'bottom-img-active'"/>
        {{content.starCount}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      ifStart: false // 是否点赞
    };
  },
  watch: {
    selected(val) {
      this.$emit("bottomChange", val);
    }
  },
  methods: {
    /**
     * 点赞
     */
    startComment() {
      this.ifStart = !this.ifStart;
    },
    /**
     * 跳转内容详情
     */
    goToDetail() {
      this.$emit("showDetail", this.content);
    }
  }
};
</script>

<style lang="less" scoped>
.content-item {
  width: 96%;
  min-height: 80px;
  border-bottom: 1px solid rgb(230, 225, 225);
  margin: 4px auto;
  padding: 10px;
  box-sizing: border-box;
  &__author {
    text-align: left;
    font-weight: bold;
  }
  &__content {
    text-align: left;
    margin: 8px auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  &__bottom {
    width: 100%;
    height: 20px;
    font-size: 14px;
    display: flex;
    justify-content: flex-end;
    div {
      margin-left: 16px;
      display: flex;
      align-items: center;
    }
    .bottom-img {
      width: 16px;
      height: 16px;
      background: url("../../../public/icons/heart.png") no-repeat;
      background-size: contain;
      &-active {
        width: 16px;
        height: 16px;
        background: url("../../../public/icons/heart-active.png") no-repeat;
        background-size: contain;
      }
    }
    img {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
