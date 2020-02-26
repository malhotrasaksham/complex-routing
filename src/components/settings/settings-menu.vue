<template>
  <div class="menu">
    <router-link
      tag="div"
      active-class="active"
      :to="{name:'personalize'}"
      class="menuItem"
    >Personalize</router-link>
    <router-link tag="div" active-class="active" :to="{name:'feedback'}" class="menuItem">Feedback</router-link>
  </div>
</template>
<style scoped>
.menuItem {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}

.menuItem.active {
  color: #FFF;
  background-color: #000;
}
.menuItem:first-child {
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.menuItem:last-child {
  border-bottom: none;
}
</style>

