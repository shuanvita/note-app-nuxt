<script setup lang="ts">
import { AddNoteModal } from '~/features/note/add'

const isOpenModal = ref(false)
</script>

<template>
  <header class="border-stroke border-b py-4">
    <NuxtLink to="/" class="container flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-primary rounded-md p-2">
          <IconNote class="h-4 w-4 text-white" />
        </div>
        <span class="text-lg font-bold">App Note on Nuxt</span>
      </div>
      <UiButton @click="isOpenModal = true">
        <template #preIcon>
          <IconPlus class="h-4 w-4 text-white" />
        </template>
        Новая заметка
      </UiButton>
    </NuxtLink>
  </header>
  <AddNoteModal v-model="isOpenModal" />
</template>

<style scoped></style>
