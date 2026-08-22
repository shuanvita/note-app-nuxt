<script setup lang="ts">
import { NoteForm, useNotesStore } from '~/entities/note'

const store = useNotesStore()
const isOpenModal = defineModel<boolean>({ required: true })

function onSubmit(title: string) {
  store.addNote({
    id: crypto.randomUUID(),
    title,
    todo: [],
  })
  isOpenModal.value = false
}
</script>

<template>
  <UiModal v-model="isOpenModal">
    <h3 class="text-xl">Создание новой заметки</h3>
    <p class="text-sm">
      Укажите заголовок заметки — список дел можно будет добавить позже, на странице редактирования.
    </p>
    <NoteForm @submit-form="onSubmit">
      <template #submit-button>
        <UiButton class="self-end" type="submit">Создать заметку</UiButton>
      </template>
    </NoteForm>
  </UiModal>
</template>
