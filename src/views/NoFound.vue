<template>
  <div class="nofound">
    <Center>
      <img src="../assets/nofound.jpg" alt="404" />
    </Center>
  </div>
</template>

<script>
import Center from "../components/base/center";
export default {
  name: "NoFound",
  components: {
    Center
  }
};
</script>

<style scoped>
.nofound img {
  width: 300px;
}
</style>
