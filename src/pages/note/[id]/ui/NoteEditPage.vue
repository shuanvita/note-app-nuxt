<script setup lang="ts">
import { EditNoteForm } from '~/features/note/edit'

defineProps<{ noteId: string }>()
</script>

<template>
  <div class="container py-8">
    <ClientOnly>
      <EditNoteForm :note-id="noteId" />
    </ClientOnly>
  </div>
</template>
