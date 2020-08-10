<template>
  <div class="Register">
    <Center>
      <h1>新闻资讯欢迎你！</h1>
      <form class="container"
            @submit.prevent="summitUserInfo">
        <div class="input-item">
          <label for="账号">账号</label>
          <input type="text"
                 v-model="userInfo.userId"
                 @input="validateEmpty('userId','*账号不能为空')">
        </div>
        <Error :msg="error.userId"></Error>
        <div class="input-item">
          <label for="昵称">昵称</label>
          <input type="text"
                 v-model="userInfo.nickname"
                 @input="validateEmpty('nickname','*昵称不能为空')">
        </div>
        <Error :msg="error.nickname"></Error>
        <div class="input-item">
          <label for="密码">密码</label>
          <input type="password"
                 v-model="userInfo.userPwd"
                 autocomplete="new-password"
                 @input="validateEmpty('userPwd','*密码不能为空')">
        </div>
        <Error :msg="error.userPwd"></Error>
        <div class="input-item">
          <label for="确认密码">确认密码</label>
          <input type="password"
                 v-model="userInfo.pwdAgain"
                 autocomplete="new-password"
                 @input="validatePwdAgain">
        </div>
        <Error :msg="error.pwdAgain"></Error>
        <div class="input-item">
          <button>注册</button>
        </div>
      </form>
    </Center>
  </div>
</template>

<script>
import Center from "../components/base/center";
import Error from "../components/base/error";  //错误信息提示
// import { userInfo } from "../services/api/userInfo"
export default {
  name: "register",
  components: {
    Center,
    Error
  },
  data () {
    return {
      userInfo: {
        userId: '',
        userPwd: '',
        pwdAgain: '',
        nickname: ''
      },
      error: {
        userId: '',
        userPwd: '',
        pwdAgain: '',
        nickname: ''
      }
    }
  },
  methods: {
    // 非空验证
    validateEmpty (filed, msg) {
      if (this.userInfo[filed] === "") {
        this.error[filed] = msg;
        return false
      } else {
        this.error[filed] = "";
        return true
      }

    },
    // 验证两次密码是否一致
    validatePwdAgain () {
      var flage = this.validateEmpty("pwdAgain", "*确认密码不能为空")
      if (flage) {
        if (this.userInfo.userPwd != this.userInfo.pwdAgain) {
          this.error.pwdAgain = "*两次密码不一致";
          return false
        }
        return true
      }

    },
    async summitUserInfo () {
      if (this.validateEmpty('userId', '*账号不能为空') & this.validateEmpty('nickname', '*昵称不能为空') & this.validateEmpty('userPwd', '*密码不能为空') & this.validatePwdAgain()) {
       this.$router.push({
            name:'Login'
          })
       // var res = await userInfo(this.userInfo)
        // if (res.msg == "") {
        //   // 登录成功
       // alert('注册成功')
        //   this.$router.push({
        //     name:'Login'
        //   })
        // } else {
        //   this.error.userId = res.msg
        // }
      }
    }

  }
};
</script>

<style scoped>
h1 {
  line-height: 60px;
  font-weight: 700;
  font-size: 30px;
}
.input-item label {
  margin-right: 10px;
  line-height: 50px;
  display: inline-block;
  width: 50px;
  text-align: right;
}
.input-item input {
  width: 200px;
  height: 30px;
  outline: none;
  border: 1px solid #333;
}
button {
  width: 200px;
  height: 30px;
  color: #fff;
  background: orange;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}
</style>
