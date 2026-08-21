import { defineStore } from 'pinia'
import type { Note } from '~/entities/note'

export const useNotesStore = defineStore('useNotes', () => {
  const notes = ref<Note[]>([])

  const addNote = (note: Note) => {
    notes.value.push(note)
  }

  function removeNote(id: string) {
    notes.value = notes.value.filter((note) => note.id !== id)
  }

  return { notes, addNote, removeNote }
})
