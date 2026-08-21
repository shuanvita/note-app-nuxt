<script setup lang="ts">
import type { Note } from '~/entities/note'
import { NoteForm, useNotesStore } from '~/entities/note'

const store = useNotesStore()
const isOpenModal = defineModel<boolean>({ required: true })

function onSubmit(data: Pick<Note, 'title' | 'todo'>) {
  store.addNote({ id: crypto.randomUUID(), ...data })
  isOpenModal.value = false
}
</script>

<template>
  <UiModal v-model="isOpenModal">
    <NoteForm @submit-form="onSubmit">
      <template #submit-button>
        <UiButton type="submit">Создать заметку</UiButton>
      </template>
    </NoteForm>
  </UiModal>
</template>
