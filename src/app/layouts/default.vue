<script setup lang="ts">
import { HomeHeader } from '~/widgets/home-header'
import { NoteHeader } from '~/widgets/note-header'

const route = useRoute()
const headerComponent = computed(() => (route.path === '/' ? HomeHeader : NoteHeader))
</script>

<template>
  <div>
    <component :is="headerComponent" />
    <main>
      <slot />
    </main>
    <footer></footer>
  </div>
</template>
