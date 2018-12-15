
<template>
  <div>
    <div class="community-box">
      <mt-header title="我的">
        <mt-button
          icon="back"
          slot="left"
          @click="() => {this.ifRegister = !this.ifRegister}"
          v-show="!ifRegister"
        ></mt-button>
      </mt-header>
      <!-- 登录 -->
      <div class="login-box" v-if="!logined && ifRegister">
        <mt-navbar v-model="selected">
          <mt-tab-item id="face">人脸登录</mt-tab-item>
          <mt-tab-item id="phone">手机登录</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="active">
          <!-- 人脸登录 -->
          <mt-tab-container-item id="face-login">
            <!-- TODO: 完成人脸登录 -->
            <div class="face-login">face-login</div>
          </mt-tab-container-item>
          <!-- 手机登录 -->
          <mt-tab-container-item id="phone-login">
            <div class="phone-login">
              <mt-field
                label="用户名"
                style="border-bottom:1px solid #EAEAEA;"
                placeholder="请输入用户名"
                v-model="registerInfo.username"
              ></mt-field>
              <mt-field
                label="密码"
                style="border-bottom:1px solid #EAEAEA;;"
                placeholder="请输入密码"
                type="password"
                v-model="registerInfo.password"
              ></mt-field>
            </div>
            <mt-button size="large" type="primary" style="width: 90%;margin: 4px auto;">登录</mt-button>
            <div
              class="register-tip"
              @click="() => {this.ifRegister = !this.ifRegister;}"
            >没有账号，去注册 &gt;&gt;</div>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <!-- 注册 -->
      <div class="register-box" v-if="!logined && !ifRegister">
        <div class="phone-login">
          <mt-field
            label="用户名"
            style="border-bottom:1px solid #EAEAEA;"
            placeholder="请输入用户名"
            v-model="registerInfo.username"
          ></mt-field>
          <mt-field
            label="密码"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="请输入密码"
            type="password"
            v-model="registerInfo.password"
          ></mt-field>
          <mt-field
            label="确认密码"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="请确认密码"
            type="password"
            v-model="registerInfo.ensurePwd"
          ></mt-field>
          <mt-field
            label="手机号"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="请输入手机号"
            type="tel"
            v-model="registerInfo.phone"
          ></mt-field>
          <mt-field
            label="验证码"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="请输入验证码"
            v-model="registerInfo.verificationCode"
          >
            <mt-button size="small" style="width: 94px;height: 40px;">获取验证码</mt-button>
          </mt-field>
          <mt-button
            size="large"
            type="primary"
            style="width: 100%;margin: 10px auto;"
            @click="register"
          >注册</mt-button>
        </div>
      </div>
      <!-- 登陆后的个人信息 -->
      <div class="inf-box" v-if="logined">
        <!-- 个人信息 -->
        <div class="info">
          <!-- 头像 -->
          <img class="info-photo" src="../../../public/icons/user.png" @click="() => {this.ifShowUpdate = !this.ifShowUpdate}">
          <div class="info-name">{{userInfo.name || 'myName'}}</div>
          <div class="info-sign">{{userInfo.sign || '这是我的个性签名这是我的个性签名这是我的个性签名这是我的个性签名'}}</div>
        </div>
        <!-- 编辑个人信息 -->
        <div class="edit-info" v-if="ifShowUpdate">
          <mt-field
            label="用户名"
            style="border-bottom:1px solid #EAEAEA;"
            placeholder="用户名"
            v-model="updateInfo.name"
          ></mt-field>
          <mt-field
            label="密码"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="密码"
            type="password"
            v-model="updateInfo.pwd"
          ></mt-field>
          <mt-field
            label="签名"
            style="border-bottom:1px solid #EAEAEA;;"
            placeholder="签名"
            type="password"
            v-model="updateInfo.sign"
          ></mt-field>
          <mt-button
            size="large"
            type="primary"
            style="width: 100%;margin: 10px auto;"
            @click="updateUserInfo"
          >更新用户信息</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "phone-login", // 切换电话登录
      selected: "phone", // 登录tab栏切换
      ifRegister: true, // 是否注册
      logined: true, // 是否已经登录
      ifShowUpdate: false, // 是否显示编辑更新信息
      loginInfo: {
        // 登录信息
        name: "",
        pwd: ""
      },
      registerInfo: {
        // 注册信息
        username: "",
        phone: "",
        ensurePwd: "",
        verificationCode: ""
      },
      userInfo: {
        // 用户信息
        photo: "",
        name: "",
        sign: ""
      },
      updateInfo: {
        // 更新编辑的信息
        name: "",
        pwd: "",
        sign: ""
      }
    };
  },
  watch: {
    selected(val) {
      if (val && val == "face") {
        this.active = "face-login";
      }
      if (val && val == "phone") {
        this.active = "phone-login";
      }
    }
  },
  methods: {
    register() {
      this.ifRegister = !this.ifRegister;
    },
    updateUserInfo(){

    }
  }
};
</script>

<style lang="less" scoped>
.login-box {
  width: 100%;
  height: 400px;
  margin-top: 0px;
}
.phone-login {
  padding: 15px;
  text-align: left;
}
.verification-code {
  width: 100px;
  height: 20px;
}
.register-tip {
  width: 94%;
  margin-top: 10px;
  font-size: 14px;
  text-align: right;
  color: silver;
}
.info {
  width: 98%;
  height: 200px;
  box-shadow: 0 0 2px rgba(8, 200, 214, 0.1);
  border-radius: 4px;
  margin: 10px auto;
  text-align: center;
  padding-bottom: 20px;
  &-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 20px;
    border-radius: 50%;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }
  &-name {
    font-size: 20px;
    font-weight: bold;
  }
  &-sign {
    width: 80%;
    height: 20px;
    margin: 10px auto;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
