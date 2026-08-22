<script setup lang="ts">
import type { Note } from '~/entities/note'

const props = defineProps<Note>()

const emit = defineEmits<{
  'delete-note': [id: string]
}>()

const visibleTodo = computed(() => props.todo.slice(0, 3))
const hiddenCount = computed(() => props.todo.length - visibleTodo.value.length)
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

    <ul v-if="todo.length" class="space-y-2">
      <li v-for="item in visibleTodo" :key="item.id" class="flex items-center gap-2">
        <span
          :class="[
            'border-stroke inline-block h-4 w-4 shrink-0 rounded',
            item.isComplete ? 'bg-primary/20 border-primary/0' : 'border',
          ]"
        />
        <span
          :class="[
            'truncate text-sm',
            item.isComplete ? 'text-foreground-muted/50 line-through' : 'text-foreground-muted',
          ]"
        >
          {{ item.text }}
        </span>
      </li>
    </ul>

    <p v-if="hiddenCount > 0" class="text-foreground-muted mt-2 text-sm">
      +{{ hiddenCount }} задачи
    </p>
  </article>
</template>

<style scoped></style>
