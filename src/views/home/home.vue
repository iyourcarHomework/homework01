
<template>
  <div class="community-box">
    <mt-header title="我的"></mt-header>
    <!-- 注册 -->
    <div class="register-box">
      <mt-navbar v-model="selected">
        <mt-tab-item id="face">人脸登录</mt-tab-item>
        <mt-tab-item id="phone">手机登录</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="active">
        <!-- 人脸登录 -->
        <mt-tab-container-item id="face-register">
          <div class="face-register">face-register</div>
        </mt-tab-container-item>
        <!-- 手机登录 -->
        <mt-tab-container-item id="phone-register">
          <div class="phone-register">
            <mt-field
              label="用户名"
              style="border-bottom:1px solid #EAEAEA;"
              placeholder="请输入用户名"
              v-model="registerInfo.username"
            ></mt-field>
            <mt-field
              label="手机号"
              style="border-bottom:1px solid #EAEAEA;;"
              placeholder="请输入手机号"
              type="tel"
              v-model="registerInfo.phone"
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
              label="验证码"
              style="border-bottom:1px solid #EAEAEA;;"
              placeholder="请输入验证码"
              v-model="registerInfo.verificationCode"
            >
              <mt-button size="small" style="width: 94px;height: 40px;">获取验证码</mt-button>
            </mt-field>
          </div>
          <mt-button size="large" type="primary" style="width: 90%;margin: 4px auto;">注册</mt-button>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "phone-register",
      selected: "phone",
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
        this.active = "face-register";
      }
      if (val && val == "phone") {
        this.active = "phone-register";
      }
    }
  }
};
</script>

<style lang="less" scoped>
.register-box {
  width: 100%;
  height: 400px;
  margin-top: 0px;
}
.phone-register {
  padding: 15px;
  text-align: left;
}
.verification-code {
  width: 100px;
  height: 20px;
}
</style>
