<template>
  <div class="animate-list">
    <TransitionGroup :tag="props.tag" name="tt" @before-enter="beforeEnter" @enter="enter">
      <slot></slot>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import ArticleAPI from '@/apis/article'
import gsap from 'gsap'
import { RendererElement } from 'vue'

interface Animateprops {
  tag: string
  duration: number
  delay: number
}

const props = withDefaults(defineProps<Animateprops>(), {
  tag: 'div',
  duration: 0.5,
  delay: 0.2,
})

const articles = ref()
ArticleAPI.getArticle().then(({ data }) => {
  articles.value = data
})

const beforeEnter = (el: RendererElement) => {
  gsap.set(el, {
    opacity: 0,
  })
}

const enter = (el: RendererElement) => {
  gsap.to(el, {
    opacity: 1,
    duration: props.duration,
    delay: el.dataset.index * props.delay + 0.5,
  })
}
</script>

<style lang="scss">
.tt-leave-active {
  position: absolute;
  width: calc(100% - 20px);
  transition: all 1s ease;
}

.tt-leave-to {
  opacity: 0;
}
.tt-move {
  transition: all 1s ease;
}
</style>
