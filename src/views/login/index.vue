<!-- 登录页面 -->
<template>
  <div class="login-box">
    <div class="logoImg textCenter">
      <img src="@/assets/images/logo..png" alt="">
    </div>
    <div class="user textCenter">
      <el-input v-model="user.userName" prefix-icon="Help" type="text" placeholder="请输入手机号/邮箱" />
      <el-input v-model="user.password" prefix-icon="Lock" type="password" show-password placeholder="请输入密码" />
    </div>
    <div class="loginBtn textCenter">
      <el-button class="f700 c-a5">登录</el-button>
    </div>
    <div class="btn2 flex flex-xAround c-a5">
        <span>境外手机号登录</span>
        <span>忘记密码</span>
      </div>
    <div class="btn3">
      <div class="register textCenter f600 f24">立即注册</div>
      <div class="flex flex-xCenter flex-yCenter">
        <hr>
        <div class="login2 c-a5">第三方软件登录</div>
        <hr>
      </div>
    </div>
    <div class="footImg flex flex-xCenter">
      <img src="@/assets/images/qq.png" alt="">
      <img src="@/assets/images/微博.png" alt="">
      <img src="@/assets/images/微信.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const user = ref({
  userName: 'admin',
  password: 'admin123'
})
</script>

<style scoped lang="scss">
.login-box {
  height: 100vh;
  background-color: #f1ece8;

  .logoImg {
    img {
      width: 25vw;
      margin-top: 30vw;
    }
  }

  .user {
    margin-top: 10vh;
    .el-input {
      width: 70vw;
      height: 5vh;
      &:first-child {
        margin-bottom: 2vh;
      }
    }
  }

  .loginBtn {
    margin-top: 3.5vh;
    .el-button {
      width: 70vw;
      height: 6vh;
      background-color: #344e43;
      border: none;
      font-weight: 700;
      color: #fff;
    }
  }
  .btn2 {
    margin-top: 2vh;
  }
  .btn3 {
    margin-top: 10vh;
    .register{
      color: #344e43;
      margin-bottom: 2vh;
    }
    hr {
      height: 0;
      width: 17vw;
      background-color: #e1dfdd !important;
    }
    .login2 {
      padding: 0 5vw;
    }
  }
  .footImg {
    margin-top: 5vh;
    img {
      width: 8vw;
      padding: 0 3vw;
    }
  }
}
</style>

<style scoped lang="scss">
// 穿透组件的样式
::v-deep .el-input__wrapper {
  background-color: #e3e0db;
}
::v-deep .el-input__inner {
  color: #a5a19b;
}
</style>