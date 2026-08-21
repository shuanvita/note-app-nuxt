<script setup lang="ts">
import type { Note } from '~/entities/note'

defineProps<Note>()

const emit = defineEmits<{
  'delete-note': [id: string]
}>()
</script>

<template>
  <article class="border-stroke rounded-lg border p-5 shadow-sm">
    <div class="mb-5 flex items-center justify-between gap-3">
      <h3 class="text-lg">{{ title }}</h3>
      <div class="flex items-center gap-2">
        <NuxtLink :to="`${id}`">
          <UiButton variant="custom">
            <template #icon>
              <IconEdit class="group-hover:text-primary-hover h-4 w-4" />
            </template>
          </UiButton>
        </NuxtLink>
        <UiButton variant="custom" @click="emit('delete-note', id)">
          <template #icon>
            <IconDelete class="group-hover:text-danger-hover h-4 w-4" />
          </template>
        </UiButton>
      </div>
    </div>
  </article>
</template>

<style scoped></style>
