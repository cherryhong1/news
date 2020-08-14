<template>
  <div>
    <Center>
      <h1>正在验证中</h1>
    </Center>
  </div>
</template>

<script>
import { Center } from "../components/base/center";
import { mapState } from "vuex"
export default {
  name: 'middle',
  components: {
    Center
  },
  computed: {
    ...mapState({
      userInfo: state => state.userInfo.userInfo,
      isLogining: state => state.userInfo.isLoading
    })
  },
  methods: {
    handlerLogin () {
      if (this.isLogining) {
        return
      }
      if (this.userInfo) {
        if (this.$router.query.returnUrl) {
          return this.$router.push(this.$router.query.returnUrl)
        } else {
          this.$router.push({ name: 'Personal' })
        }

      } else {
        this.$router.push({ name: 'Login' })
      }

    }
  },
  watch: {
    userInf: {
      immediate: true,
      handler () {
        this.handlerLogin()
      }
    },
    isLogining: {
      immediate: true,
      handler () {
        this.handlerLogin()
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 34px;
}
</style>