
<template>
  <div class="community-box">
    <mt-header title="班级"></mt-header>
    <!-- 我的班级 -->
    <div class="my-classes">
      <div class="my-classes__header">
        <div
          class="my-classes__item-btn"
          v-for="(item, index) in myClasses"
          :key="index"
          @click="changeClass(item, index)"
        >{{item}}</div>
      </div>
    </div>
    <!-- 当前班级信息 -->
    <div class="class-info">
      <h2>{{myClasses[currentClass]}}</h2>
      <div class="btn-group">
        <mt-button type="primary" @click="showPublishHomework">发布作业</mt-button>
        <!-- 上传作业 -->
        <mt-button type="default" @click="uploadHomework">上传作业</mt-button>
        <mt-button type="danger" @click="correctHomework">批改作业</mt-button>
      </div>
      <!-- 发布作业 -->
      <div class="publish-homework" v-if="isShowPublishHomework">
        <textarea></textarea>
        <mt-button type="default" size="large" @click="publishHomework">发布作业</mt-button>
      </div>
      <!-- 批改作业 -->
      <div class="correct-homework" v-if="isShowCorrectHomework">
        发布作业还没做！
      </div>
    </div>
    <!-- 添加班级按钮 -->
    <div class="add-class-icon" @click="() => {this.ifAddNewClass = !this.ifAddNewClass}">+</div>
    <!-- 添加班级 -->
    <div
      class="add-class"
      v-if="ifAddNewClass"
      @click="() => {this.ifAddNewClass = !this.ifAddNewClass}"
    >
      <div class="add-class-edit" @click.stop>
        <h2>创建班级</h2>
        <mt-field label="班级名称" placeholder="请输入班级" v-model="newClass.name"></mt-field>
        <mt-field
          label="班级说明"
          placeholder="请输入班级说明"
          type="textarea"
          rows="4"
          v-model="newClass.illustrate"
        ></mt-field>
        <mt-button size="large" type="primary" @click="addNewClass">确认创建</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myClasses: ["class01", "class02", "class03", "class04"],
      newClass: {
        name: "", // 班级名称
        illustrate: "" // 班级说明
      },
      ifAddNewClass: false, // 创建班级弹窗
      currentClass: 0, // 当前班级
      isShowPublishHomework: true, // 是否显示发布作业
      isShowCorrectHomework: false // 是否显示批改作业
    };
  },
  methods: {
    /**
     * 创建班级
     */
    addNewClass() {},
    /**
     * 切换班级
     */
    changeClass(item, index) {
      this.currentClass = index;
    },
    /**
     * 显示发布作业
     */
    showPublishHomework() {
      this.isShowPublishHomework = true;
      this.isShowCorrectHomework = false;
    },
    /**
     * 发布作业
     */
    publishHomework() {},
    /**
     * 上传作业
     */
    uploadHomework() {
      this.isShowPublishHomework = false;
      this.isShowCorrectHomework = false;
    },
    /**
     * 批改作业
     */
    correctHomework() {
      this.isShowPublishHomework = false;
      this.isShowCorrectHomework = true;
    }
  }
};
</script>

<style lang="less" scoped>
.add-class-icon {
  z-index: 999;
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: rgb(10, 111, 151);
  border-radius: 50%;
  font-size: 40px;
  line-height: 60px;
  color: white;
}
.add-class {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  .add-class-edit {
    width: 90%;
    min-height: 200px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    margin: 80px auto;
    border-radius: 4px;
  }
}
.my-classes {
  width: 98%;
  margin: 5px auto;
  &::after {
    content: "";
    display: block;
    clear: both;
  }
  &__header {
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
  &__item-btn {
    min-width: 40px;
    max-width: 80px;
    margin: 8px;
    padding: 8px;
    background-color: rgb(113, 202, 243);
    float: left;
    border-radius: 4px;
    color: #fff;
  }
}
.class-info {
  margin: 10px auto;
  box-sizing: border-box;
  padding: 4px;
  padding-bottom: 10px;
  width: 96%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  h2 {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
  }
  .btn-group {
    display: flex;
    justify-content: space-around;
  }
}
textarea {
  width: 98%;
  height: 200px;
  margin: 10px auto;
  margin-top: 20px;
  border: 1px solid rgb(190, 187, 187);
  outline: none;
}
.correct-homework {
  width: 96%;
  height: 200px;
  margin: 10px auto;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
}
</style>
