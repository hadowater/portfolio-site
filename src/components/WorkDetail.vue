<!-- src/views/WorkDetail.vue -->
<template>
  <div class="work-detail" v-if="work">
    <div class="work-detail__text">
      <h1>{{ work.title }}</h1>
      <p class="workUrl">
        <a :href="work.url" target="_blank" rel="noopener">{{ work.url }}</a>
      </p>
      <h2>担当領域</h2>
      <p>{{ work.part }}</p>
      <h2>使用ツール</h2>
      <p>{{ work.tools.join(", ") }}</p>
      <h2>制作期間</h2>
      <p>{{ work.period }}</p>
      <h2>概要</h2>
      <p>{{ work.description }}</p>
      <h2>ターゲット</h2>
      <p>{{ work.target }}</p>
      <h2>工夫した点</h2>
      <p v-for="(point, index) in work.points" :key="index">{{ point }}</p>

      <div class="backHome"><router-link to="/">戻る</router-link></div>
    </div>
    <div class="work-detail__image">
      <img :src="getImageUrl(work.id)" :alt="work.title" />
    </div>
  </div>
  <div v-else>
    <p>作品が見つかりませんでした。</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { works } from "@/data/works";

const route = useRoute();
const work = works.find((w) => w.id === route.params.id);

function getImageUrl(id) {
  return new URL(`../assets/works/${id}/screenshot.jpg`, import.meta.url).href;
}
</script>
