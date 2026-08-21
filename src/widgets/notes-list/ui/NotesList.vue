<script setup lang="ts">
import { CardNote, useNotesStore } from '~/entities/note'
import NotesEmpty from './NotesEmpty.vue'
import { DeleteNoteModal } from '~/features/note/delete'

const { notes } = storeToRefs(useNotesStore())

const isDeleteModalOpen = ref(false)
const noteIdToDelete = ref<string | null>(null)

function onDeleteNote(id: string) {
  noteIdToDelete.value = id
  isDeleteModalOpen.value = true
}
</script>

<template>
  <ClientOnly>
    <NotesEmpty v-if="!notes.length" />
    <div class="grid grid-cols-3 gap-6" v-else>
      <CardNote
        v-for="note in notes"
        :id="note.id"
        :key="note.id"
        :title="note.title"
        :todo="note.todo"
        @delete-note="onDeleteNote"
      />
    </div>

    <DeleteNoteModal v-if="noteIdToDelete" v-model="isDeleteModalOpen" :note-id="noteIdToDelete" />
  </ClientOnly>
</template>

<style scoped></style>
