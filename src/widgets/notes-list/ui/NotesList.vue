<script setup lang="ts">
import { useNotesStore } from '~/entities/note'
import { storeToRefs } from '#imports'

const { notes } = storeToRefs(useNotesStore())
</script>

<template>
  <div class="flex flex-col items-center justify-center space-y-5" v-if="!notes.length">
    <div class="bg-primary-light flex h-14 w-14 items-center justify-center rounded-3xl">
      <IconNote class="text-primary h-6 w-6" />
    </div>
    <div class="space-y-3 text-center">
      <div class="text-2xl">Пока нет заметок</div>
      <div>Создайте свою первую заметку, чтобы начать.</div>
    </div>
    <UiButton>
      <template #preIcon>
        <IconPlus class="h-4 w-4 text-white" />
      </template>
      Создать заметку
    </UiButton>
  </div>
  <div v-else>Заметки</div>
</template>

<style scoped></style>
