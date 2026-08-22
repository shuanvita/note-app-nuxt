<script setup lang="ts">
const noteTitle = defineModel<string>('title', { default: '' })
const emit = defineEmits<{ 'submit-form': [value: string] }>()

const isTitleEmpty = computed(() => noteTitle.value.trim().length === 0)

function onSubmitForm() {
  if (isTitleEmpty.value) return
  emit('submit-form', noteTitle.value.trim())
}
</script>

<template>
  <form class="flex flex-col space-y-6" @submit.prevent="onSubmitForm">
    <UiInput label="Заголовок заметки" v-model="noteTitle" />
    <slot name="submit-button" :is-disabled="isTitleEmpty" />
  </form>
</template>
