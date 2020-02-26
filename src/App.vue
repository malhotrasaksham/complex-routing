<template>
  <div id="app">
    <top-nav/>
    <div class="content">
      <router-view></router-view>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import TopNav from "@/components/global/top-nav";
import AppFooter from "@/components/global/footer";

export default {
  name: "App",
  components: {
    TopNav,
    AppFooter
  }
};
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
<style scoped>
.content {
  flex: 1;
  width: 70%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
}
</style>

