import { defineStore } from 'pinia'
import type { Note } from '~/entities/note'

export const useNotesStore = defineStore('useNotes', () => {
  const notes = ref<Note[]>([])
  return { notes }
})
