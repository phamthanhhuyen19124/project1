<template>
  <div id="app">
    <HeaderPage/>
    <router-view/>
    <FooterPage/>
  </div>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    HeaderPage,
    FooterPage,
  },
  name: 'App',
}
</script>

<style>
#app {
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(255,255,255);
}
</style>
