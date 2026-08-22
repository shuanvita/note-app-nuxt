<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNotesStore } from '~/entities/note'
import { DeleteNoteModal } from '~/features/note/delete'

const route = useRoute()
const { notes } = storeToRefs(useNotesStore())

const noteId = computed(() => {
  const id = route.params.id
  return typeof id === 'string' ? id : null
})

const isDeleteModalOpen = ref(false)

function onDeleteClick() {
  isDeleteModalOpen.value = true
}

watch(notes, () => {
  if (noteId.value && !notes.value.some((note) => note.id === noteId.value)) {
    navigateTo('/')
  }
})
</script>

<template>
  <header class="border-stroke border-b py-4">
    <div class="container flex flex-wrap items-center justify-between gap-3">
      <NuxtLink to="/">
        <div class="flex items-center gap-2">
          <div class="bg-primary rounded-md p-2">
            <IconNote class="h-4 w-4 text-white" />
          </div>
          <span class="text-lg font-bold">App Note on Nuxt</span>
        </div>
      </NuxtLink>

      <UiButton variant="danger" @click="onDeleteClick">
        <template #preIcon>
          <IconDelete class="hover:text-danger h-4 w-4" />
        </template>
        Удалить заметку
      </UiButton>
    </div>

    <ClientOnly>
      <DeleteNoteModal v-if="noteId" v-model="isDeleteModalOpen" :note-id="noteId" />
    </ClientOnly>
  </header>
</template>
