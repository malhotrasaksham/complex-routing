<template>
  <div class="menu">
    <router-link :to="{name:'layout'}" class="menuItem" active-class="active" tag="span">Layout</router-link>
    <router-link :to="{name:'theme'}" class="menuItem" active-class="active" tag="span">Theme</router-link>
  </div>
</template>
<style scoped>
.menu {
  border-bottom: 1px solid #CCC;
}
.menuItem {
  padding: 10px;
  cursor: pointer;
}

.menuItem.active {
  border-bottom: 3px solid #000;
  display: inline-block;
}
</style>

