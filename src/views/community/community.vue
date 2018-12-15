

<template>
  <div>
    <div class="community-box" v-if="!ifEdit">
      <!-- 顶部 -->
      <mt-header title="社区" style="position: fixed;top: 0; width: 100%;z-index: 9999;">
        <mt-button icon="more" slot="right" @click="toggleEdit"></mt-button>
      </mt-header>
      <!-- 搜索框 -->
      <mt-search
        style="width: 95%;height: 60px;margin: 5px auto;position: fixed;top: 35px; width: 100%;z-index: 9999;"
        v-model="searchValue"
      ></mt-search>
      <!-- 社区发表的内容 -->
      <div class="content-list">
        <div v-for="(item, index) in contentList" :key="index">
          <content-item :content="item" @showDetail="goDetail"></content-item>
        </div>
      </div>
    </div>
    <!-- 编辑发表 -->
    <div class="edit-box" v-if="ifEdit">
      <edit-page @hideEdit="toggleEdit"></edit-page>
    </div>
    <!-- 内容详情 + 评论列表 -->
    <div class="content-detail" v-if="ifDetail" @click="() => {this.ifDetail = !this.ifDetail}">
      <div class="close-icon" style="z-index:99999;"></div>
      <div class="content-detail-main" @click.stop="() => {}">
        <div class="content-detail-main__author">{{detailContent.author}}</div>
        <div class="content-detail-main__content">{{detailContent.content}}</div>
        <div class="content-detail-main__comment">
          <textarea placeholder="输入评论..."></textarea>
          <mt-button size="large" type="primary">添加评论</mt-button>
        </div>
        <div class="content-detail-main__comment-list">
          <h3>评论列表</h3>
          <div
            v-if="detailContent.commentList && detailContent.commentList.length"
            class="content-detail-main__comment-item"
            v-for="(item, index) in detailContent.commentList"
            :key="index"
          >
            <h4>{{item.author}}</h4>
            <div>{{item.content}}</div>
          </div>
          <div
            class="comment-bottom"
            v-if="detailContent.commentList && detailContent.commentList.length"
          >-- 已经到底了 --</div>
          <div
            class="no-comment"
            v-if="!detailContent.commentList || !detailContent.commentList.length"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editPage from "../edit_page/edit_page.vue";
import contentItem from "../../components/content_item/content_item.vue";
export default {
  data() {
    return {
      searchValue: "",
      ifEdit: false, // 是否显示编辑发表
      // ifStart: false, // 是否点赞
      ifDetail: "", // 是否内容详情弹窗
      detailContent: {}, // 详细内容
      contentList: [
        {
          author: "Ersul", // 发表者
          content:
            "emmmmm，这是我发表的内容，23333333333333333，这是什么系统。。。a", // 发表的内容
          commentCount: 9, // 评论数
          starCount: 100, // 点赞数
          commentList: [
            // 评论列表
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment03",
              content: "好赞，612312312312366666"
            },
            {
              author: "comment01",
              content: "555555555555555555555"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            }
          ]
        },
        {
          author: "author01", // 发表者
          content:
            "emmmmm，这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100, // 点赞数
          commentList: [
            // 评论列表
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment03",
              content: "好赞，612312312312366666"
            },
            {
              author: "comment01",
              content: "555555555555555555555"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            }
          ]
        },
        {
          author: "author01", // 发表者
          content: "testtesttesttesttest", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100, // 点赞数
          commentList: [
            // 评论列表
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment02",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment03",
              content: "好赞，612312312312366666"
            },
            {
              author: "comment01",
              content: "555555555555555555555"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            },
            {
              author: "comment01",
              content: "好赞，666666666666666666"
            }
          ]
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content:
            "emmmmm，这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        },
        {
          author: "author01", // 发表者
          content: "emmmmm，这是我发表的内容", // 发表的内容
          commentCount: 100, // 评论数
          starCount: 100 // 点赞数
        }
      ]
    };
  },
  methods: {
    /**
     * 切换是否显示编辑
     */
    toggleEdit() {
      this.ifEdit = !this.ifEdit;
    },
    /**
     * 显示内容详情
     */
    goDetail(content) {
      if (content) {
        this.detailContent = content;
        this.ifDetail = !this.ifDetail;
      }
    }
  },
  components: {
    editPage,
    contentItem
  }
};
</script>

<style lang="less" scoped>
.community-box {
  padding-top: 100px;
  padding-bottom: 50px;
}
.content-list {
  border-top: 1px solid rgb(238, 238, 238);
}
.content-detail {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  .close-icon {
    position: absolute;
    top: 30px;
    right: 70px;
    width: 20px;
    height: 20px;
    background: url("../../../public/icons/close.png") no-repeat;
    background-size: contain;
  }
  &-main {
    width: 90%;
    height: 89%;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
    padding: 16px;
    box-sizing: border-box;
    overflow-y: scroll;
    &__author {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-bottom: 1px solid rgb(241, 235, 235);
    }
    &__content {
      font-size: 18x;
      text-align: left;
      line-height: 25px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgb(241, 235, 235);
    }
    &__comment {
      margin: 20px auto;
      padding: 4px;
      text-align: center;
      textarea {
        width: 100%;
        height: 100px;
        outline: none;
        box-sizing: border-box;
        padding: 10px;
        border-radius: 4px;
        font-size: 18px;
        border: 1px solid silver;
        overflow: hidden;
        margin-bottom: 10px;
      }
    }
    &__comment-list {
      position: relative;
      text-align: left;
      padding-left: 16px;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 2px;
        height: 24px;
        background-color: skyblue;
      }
    }
    .no-comment {
      height: 200px;
      width: 200px;
      margin: 20px auto;
      background: url("../../../public/icons/nodata-message.png") no-repeat;
      background-size: contain;
    }
    .comment-bottom {
      font-size: 18px;
      text-align: center;
      padding-top: 8px;
      color: rgb(114, 112, 112);
    }
    .content-detail-main__comment-item {
      width: 100%;
      min-height: 40px;
      border-bottom: 1px solid rgb(216, 207, 207);
      font-size: 14px;
      h4 {
        margin-bottom: -6px;
      }
      div {
        padding: 10px;
      }
    }
  }
}
</style>
