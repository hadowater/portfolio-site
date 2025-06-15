<!-- src/components/Header.vue -->
<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
</script>
<template>

  <header>
    <div class="pc header--nav">
      <router-link to="/">
        <img class="logo" src="@/assets/images/logo.png" alt="ロゴ" /></router-link>
      <!-- ハンバーガーボタン -->
      <button @click="isOpen = !isOpen" class="menu-toggle">☰</button>
      <nav class="nav" :class="{ open: isOpen }">
        <ul>
          <li><router-link :to="{path: '/'}">about</router-link></li>
          <li><router-link :to="{ path: '/', hash: '#works' }">works</router-link></li>
          <!--<li><router-link :to="{ path: '/', hash: '#contact' }">contact</router-link></li>-->
        </ul>
      </nav>
    </div>
  </header>
</template>
