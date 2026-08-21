<script setup lang="ts">
import type { NoteFormData } from '~/entities/note'

const formData = defineModel<NoteFormData>({
  default: () => ({
    title: '',
    todo: {
      text: '',
      isComplete: false,
    },
  }),
})

const emit = defineEmits<{
  'submit-form': [data: NoteFormData]
}>()

function onSubmitForm() {
  emit('submit-form', formData.value)
}
</script>

<template>
  <form class="flex flex-col space-y-6" @submit.prevent="onSubmitForm">
    <UiInput label="Заголовок заметки" v-model="formData.title" />
    <UiInput label="Заголовок задачи" v-model="formData.todo.text" />
    <UiButton class="self-end" variant="secondary">
      <template #preIcon>
        <IconPlus class="h-5 w-5" />
        Добавить задачу
      </template>
    </UiButton>
    <slot name="submit-button" />
  </form>
</template>
