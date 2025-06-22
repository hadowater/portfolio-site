<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const isOpen = ref(false);
const router = useRouter();
const route = useRoute();

const navItems = [
  { label: 'about', path: '/' },
  { label: 'works', path: '/', anchor: '#works' },
  // { label: 'contact', path: '/', anchor: '#contact' },
  // 必要に応じて追加
];
const scrollToSection = async (path, anchor) => {
  if (route.path !== path) {
    await router.push(path);
  }

  if (anchor) {
    requestAnimationFrame(() => {
      const el = document.querySelector(anchor);
      if (el) {
        window.scrollTo({
          top: el.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  }

  isOpen.value = false;
};
</script>

<template>
  <header>
    <div class="pc header--nav">
      <router-link to="/">
        <img class="logo" src="@/assets/images/logo.png" alt="ロゴ" />
      </router-link>

      <!-- ハンバーガーボタン -->
      <button @click="isOpen = !isOpen" class="menu-toggle">☰</button>

      <nav class="nav" :class="{ open: isOpen }">
        <ul>
          <li v-for="item in navItems" :key="item.label">
            <button @click="scrollToSection(item.path, item.anchor)">
              {{ item.label }}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
