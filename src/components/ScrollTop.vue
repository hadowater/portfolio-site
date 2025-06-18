<!-- src/components/ScrollTop.vue -->
<template>
  <button v-show="isVisible" class="scroll-top" @click="scrollToTop">
    TOP
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  isVisible.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-top {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #460202;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 50%;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.scroll-top:hover {
  opacity: 1;
}
</style>
