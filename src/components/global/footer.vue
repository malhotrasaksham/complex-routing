<template>
  <div class="container">© Copyright - {{year}}</div>
</template>
<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #000;
  color: #FFF;
  padding: 20px;
  text-align: center;
}
</style>
