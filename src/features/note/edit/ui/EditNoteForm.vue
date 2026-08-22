<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { Note, NoteTodo } from '~/entities/note'
import { useNotesStore, NoteTodoItem } from '~/entities/note'

const props = defineProps<{ noteId: string }>()

const store = useNotesStore()
const { notes } = storeToRefs(store)

const originalNote = computed(() => notes.value.find((note: Note) => note.id === props.noteId))

const title = ref('')
const todo = ref<NoteTodo[]>([])
const newTaskText = ref('')

watch(
  originalNote,
  (note) => {
    if (note) {
      title.value = note.title
      todo.value = note.todo.map((item: NoteTodo) => ({ ...item }))
    }
  },
  { immediate: true },
)

function addTask() {
  const text = newTaskText.value.trim()
  if (!text) return
  todo.value.push({
    id: crypto.randomUUID(),
    text,
    isComplete: false,
  })
  newTaskText.value = ''
}

function removeTask(id: string) {
  todo.value = todo.value.filter((item: NoteTodo) => item.id !== id)
}

function toggleComplete(id: string) {
  const item = todo.value.find((item: NoteTodo) => item.id === id)
  if (item) item.isComplete = !item.isComplete
}

function updateTaskText(id: string, text: string) {
  const item = todo.value.find((item: NoteTodo) => item.id === id)
  if (item) item.text = text
}

async function onSave() {
  store.updateNote(props.noteId, {
    title: title.value,
    todo: todo.value,
  })
  await navigateTo('/')
}
</script>

<template>
  <div v-if="originalNote" class="flex flex-col space-y-6">
    <UiInput label="Заголовок заметки" v-model="title" />
    <div>
      <h3 class="text-foreground-muted mb-2 text-sm">Список дел</h3>
      <div v-if="todo.length" class="border-stroke rounded-lg border">
        <NoteTodoItem
          v-for="item in todo"
          :key="item.id"
          :text="item.text"
          :is-completed="item.isComplete"
          @toggle-complete="toggleComplete(item.id)"
          @delete-task="removeTask(item.id)"
          @update-text="updateTaskText(item.id, $event)"
        />
      </div>
      <div class="mt-3 flex items-center gap-2">
        <UiInput class="flex-1" label="Новая задача" v-model="newTaskText" @keyup.enter="addTask" />
        <UiButton type="button" variant="custom" @click="addTask">
          <template #preIcon>
            <IconPlus class="h-5 w-5" />
          </template>
          Добавить
        </UiButton>
      </div>
    </div>
    <UiButton class="self-end" type="button" @click="onSave">Сохранить заметку</UiButton>
  </div>
  <div v-else class="text-foreground-muted">Заметка не найдена</div>
</template>

<style scoped></style>
