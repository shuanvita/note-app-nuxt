<script setup lang="ts">
import { HomePage } from '@/pages/home'

useHead({
  title: 'App Note on Nuxt',
  meta: [
    { name: 'description', content: 'App Note on Nuxt' },
    { property: 'og:title', content: 'App Note on Nuxt' },
    { property: 'og:description', content: 'App Note on Nuxt' },
  ],
})
</script>

<template>
  <HomePage />
</template>
