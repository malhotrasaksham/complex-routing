<template>
  <div class="container">
    <div class="logoContainer">
      <router-link class="logo" :to="{name: 'home'}" tag="span">To-Do</router-link>
    </div>
    <div class="navContainer">
      <div class="navItems" v-if="isLoggedIn">
        <router-link
          :to="{name: 'settings'}"
          active-class="active"
          tag="span"
          class="navItem"
        >Settings</router-link>
      </div>
      <div class="navItems" v-else>
        <span class="navItem">Login</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoggedIn: true
    };
  }
};
</script>
<style scoped>
.container {
  background-color: #000;
  color: #FFF;
  padding: 0px 20px;
  display: flex;
  line-height: 50px;
}
.logoContainer {
  flex: 1;
}
.logo {
  font-weight: bold;
  font-size: 1.1em;
  cursor: pointer;
}
.navItem {
  cursor: pointer;
}
.navItem.active {
  border-bottom: 1px solid #FFF;
}
</style>
