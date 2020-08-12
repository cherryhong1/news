<template>
  <div class="Login">
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
          <label for="密码">密码</label>
          <input type="password"
                 v-model="userInfo.userPwd"
                 autocomplete="new-password"
                 @input="validateEmpty('userPwd','*密码不能为空')">
        </div>
        <Error :msg="error.userPwd"></Error>
        <div class="input-item">
          <button>{{isLogining?'...loading':'登录'}}</button>
        </div>
      </form>
    </Center>
  </div>
</template>

<script>
import Center from "../components/base/center";
import Error from "../components/base/error";  //错误信息提示
import { mapState } from "vuex"
// import { userInfo } from "../services/api/userInfo"
export default {
  name: "login",
  components: {
    Center,
    Error
  },
  data () {
    return {
      userInfo: {
        userId: '',
        userPwd: '',
      },
      error: {
        userId: '',
        userPwd: '',
      }
    }
  },
  computed: {
    ...mapState({
      isLogining: state => state.userInfo.isLoading
    })
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

    async summitUserInfo () {
      console.log(this.isLogining)
      if (this.isLogining) {
        return false
      }
      if (this.validateEmpty('userId', '*账号不能为空') & this.validateEmpty('userPwd', '*密码不能为空')) {
        // var res = await userInfo(this.userInfo)
        // if (res.msg == "") {
        //   // 登录成功
        //   this.$router.push({
        //     name:'Login'
        //   })
        // } else {
        //   this.error.userId = res.msg
        // }
        var result = this.$store.dispatch('userInfo/fetchUserInfo', this.userInfo)
        console.log(result)
        if (result) {
          this.$router.push({
            name: 'Home'
          })
        } else {
          this.error.userId = '账号或者密码错误'
        }
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
