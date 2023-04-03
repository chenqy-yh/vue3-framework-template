<template>
  <div class="article-content">
    <AnimateList tag="ul" :duration="1.5" :delay="0.3">
      <li :data-index="i" v-for="(article, i) in articles" :key="article.id">
        {{ article.title }}
      </li>
    </AnimateList>
  </div>
</template>

<script setup lang="ts">
import ArticleAPI from '@/apis/article'

const articles = ref()
ArticleAPI.getArticle().then(({ data }) => {
  articles.value = data
})
</script>

<style lang="scss">
.article-content {
  background: #16a085;
  padding: 10px;
  height: 100vh;
  width: 100vw;
  ul {
    position: relative;
    li {
      padding: 10px;
      margin: 10px;
      background: #1abc9c;
    }
  }
}
</style>
