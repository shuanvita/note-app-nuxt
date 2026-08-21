<script setup lang="ts">
import { NoteEditPage } from '@/pages/note/[id]'

const route = useRoute()
const noteId = route.params.id as string

useHead({
  title: 'Редактирование заметки — App Note on Nuxt',
})
</script>

<template>
  <NoteEditPage :note-id="noteId" />
</template>
