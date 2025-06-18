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
      <ul>
        <li v-for="(point, index) in work.points" :key="index">{{ point }}</li>
      </ul>

      <div class="backHome"><router-link to="/">戻る</router-link></div>
    </div>

    <div class="work-detail__image">
      <img v-for="(img, index) in work.screenshots" :key="index" :src="img" :alt="`${work.title} スクリーンショット${index + 1}`" />
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
</script>
