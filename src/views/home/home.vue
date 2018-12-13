
<template>
  <div>
    <div class="community-box">
      <mt-header title="我的"></mt-header>
      <!-- 登录 -->
      <div class="login-box" v-if="ifRegister">
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
      <div class="register-box" v-else>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "phone-login",
      selected: "phone",
      ifRegister: true,
      loginInfo: {
        name: "",
        pwd: ""
      },
      registerInfo: {
        username: "",
        phone: "",
        ensurePwd: "",
        verificationCode: ""
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
</style>
