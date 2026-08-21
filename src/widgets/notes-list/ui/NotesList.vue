<script setup lang="ts">
import { CardNote, type Note, useNotesStore } from '~/entities/note'
import { NotesEmpty } from '~/widgets/notes-list'

const { notes } = storeToRefs(useNotesStore())

const store = useNotesStore()

function onDeleteNote(id: string) {
  store.removeNote(id)
}
</script>

<template>
  <NotesEmpty v-if="!notes.length" />
  <div class="grid grid-cols-3 gap-6" v-else>
    <CardNote
      v-for="(note, index) in notes"
      :id="note.id"
      :key="note.id"
      :title="note.title"
      :todo="note.todo"
      @delete-note="onDeleteNote"
    />
  </div>
</template>

<style scoped></style>
