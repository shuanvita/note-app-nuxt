<script setup lang="ts">
import { useNotesStore } from '~/entities/note'
import { NotesEmpty } from '~/widgets/notes-list'

const { notes } = storeToRefs(useNotesStore())
</script>

<template>
  <NotesEmpty v-if="!notes.length" />
  <div v-else>Заметки</div>
</template>

<style scoped></style>
