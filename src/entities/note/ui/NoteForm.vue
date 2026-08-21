<script setup lang="ts">
import type { Note } from '~/entities/note'

const formData = defineModel<Pick<Note, 'title' | 'todo'>>({
  default: () => ({ title: '', todo: [] }),
})

const emit = defineEmits<{
  'submit-form': [note: Pick<Note, 'title' | 'todo'>]
}>()

function onSubmitForm() {
  emit('submit-form', { title: formData.value.title, todo: formData.value.todo })
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="onSubmitForm">
    <UiInput label="Заголовок заметки" v-model="formData.title" />
    <div class="space-y-4">
      <div class="text-md">Добавить задачи</div>
    </div>
    <slot name="submit-button" />
  </form>
</template>
