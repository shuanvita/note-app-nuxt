<script setup lang="ts">
import { useNotesStore } from '~/entities/note'

const props = defineProps<{ noteId: string }>()
const isOpen = defineModel<boolean>({ required: true })

const store = useNotesStore()

function confirmDelete() {
  store.removeNote(props.noteId)
  isOpen.value = false
}
</script>

<template>
  <UiModal class="flex flex-col" v-model="isOpen">
    <div class="text-lg font-bold">Удалить заметку</div>
    <p>Вы уверены, что действительно хотите удалить эту заметку? Это действие нельзя отменить.</p>
    <UiButton class="self-end" variant="danger" @click="confirmDelete">Удалить</UiButton>
  </UiModal>
</template>
