<script setup lang="ts">
import { NoteForm } from '~/entities/note'

const isOpenModal = ref(false)
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-5">
    <div class="bg-primary-light flex h-14 w-14 items-center justify-center rounded-3xl">
      <IconNote class="text-primary h-6 w-6" />
    </div>
    <div class="space-y-3 text-center">
      <div class="text-2xl">Пока нет заметок</div>
      <div>Создайте свою первую заметку, чтобы начать.</div>
    </div>
    <UiButton @click="isOpenModal = true">
      <template #preIcon>
        <IconPlus class="h-4 w-4 text-white" />
      </template>
      Создать заметку
    </UiButton>
  </div>
  <UiModal v-model="isOpenModal">
    <NoteForm />
  </UiModal>
</template>
