<template>
  <div id="app">
    <Header></Header>
    <div class="root-container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  components: {
    "Header": Header
  }
}
</script>

<style>
.root-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px;
}
</style>
