<template>
  <div class="container">
    <el-card>
      <img src="../../assets/logo_cx.png" alt />
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="LoginFrom.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="LoginFrom.code"
            style="width:240px;margin-right:8px"
            placeholder="请输入验证码"
          ></el-input>
          <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      LoginFrom: {
        mobile: '',
        code: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  // background: pink;
  background: url(../../assets/login_bg.jpg) no-repeat center / cover;
  .el-card {
    width: 400px;
    height: 360px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      margin: 0 auto 24px;
      display: block;
    }
  }
}
</style>
