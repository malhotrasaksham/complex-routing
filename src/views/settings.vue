<template>
  <div class="settingsContainer">
    <div class="section left">
      <router-view name="left"></router-view>
    </div>
    <div class="section right">
      <router-view name="right"></router-view>
    </div>
  </div>
</template>
<style scoped>
.settingsContainer {
  display: flex;
  height: 100%;
}
.section {
  margin: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
}
.right {
  flex: 2;
  display: flex;
  flex-direction: column;
}
.left {
  flex: 1;
}
.bottom {
  flex: 1;
}
</style>

