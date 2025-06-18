<!-- src/App.vue -->
<script setup>
import Header from "./components/Header.vue";
// import About from "./components/About.vue";
// import Works from "./components/Works.vue";
import ScrollTop from '@/components/ScrollTop.vue'
</script>

<template>
  <div>
    <Header />
    <router-view />
    <ScrollTop />
    <!-- <About /> -->
    <!-- <Works /> -->
  </div>
</template>

<style scoped></style>
