<script setup lang="ts">
import { EditNoteForm } from '~/features/edit-note'

defineProps<{ noteId: string }>()
</script>

<template>
  <div class="container py-8">
    <ClientOnly>
      <EditNoteForm :note-id="noteId" />
    </ClientOnly>
  </div>
</template>
