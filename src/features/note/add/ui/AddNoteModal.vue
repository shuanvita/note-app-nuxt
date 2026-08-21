<script setup lang="ts">
import type { Note } from '~/entities/note'
import { NoteForm, useNotesStore } from '~/entities/note'

interface NoteFormData {
  title: string
  todo: {
    text: string
    isComplete: boolean
  }
}

const store = useNotesStore()
const isOpenModal = defineModel<boolean>({ required: true })

function onSubmit(data: NoteFormData) {
  const todo = {
    id: crypto.randomUUID(),
    ...data.todo,
  }
  store.addNote({
    id: crypto.randomUUID(),
    title: data.title,
    todo: [todo],
  })
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
