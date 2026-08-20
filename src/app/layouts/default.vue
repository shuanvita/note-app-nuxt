<script setup lang="ts">
import { HomeHeader } from '~/widgets/home-header'
</script>

<template>
  <div>
    <HomeHeader />
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
