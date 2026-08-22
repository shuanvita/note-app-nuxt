<script setup lang="ts">
const noteTitle = defineModel<string>('title', { default: '' })
const emit = defineEmits<{ 'submit-form': [value: string] }>()

function onSubmitForm() {
  emit('submit-form', noteTitle.value)
}
</script>

<template>
  <form class="flex flex-col space-y-6" @submit.prevent="onSubmitForm">
    <UiInput label="Заголовок заметки" v-model="noteTitle" />
    <slot name="submit-button" />
  </form>
</template>
