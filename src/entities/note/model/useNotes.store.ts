import { defineStore, skipHydrate } from 'pinia'
import { useStorage, debounceFilter } from '@vueuse/core'
import type { Note } from '~/entities/note'

export const useNotesStore = defineStore('useNotes', () => {
  const notes = useStorage<Note[]>('notes-app:notes', [])

  const addNote = (note: Note) => {
    notes.value.push(note)
  }

  function removeNote(id: string) {
    notes.value = notes.value.filter((note) => note.id !== id)
  }

  function updateNote(id: string, patch: Partial<Note>) {
    const note = notes.value.find((note) => note.id === id)
    if (note) Object.assign(note, patch)
  }

  return { notes: skipHydrate(notes), addNote, removeNote, updateNote }
})
