<!-- src/views/Works.vue -->
<template>
  <section id="works" class="works">
    <h1>WORKS</h1>
    <div class="works--container">
      <div class="works--container--items" v-for="work in works" :key="work.id">
        <router-link :to="`/works/${work.id}`">
          <img :src="getThumbUrl(work.id)" :alt="work.title" />
          <p class="work-title">{{ work.title }}</p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { works } from "@/data/works.js"; // 拡張子付きでもOK

function getThumbUrl(id) {
  return new URL(`../assets/works/${id}/thumb.jpg`, import.meta.url).href;
}
</script>
