export interface Note {
  id: string
  title: string
  todo: NoteTodo[]
}

export interface NoteTodo {
  id: string
  text: string
  isComplete: boolean
}

export interface NoteFormData {
  title: string
  todo: {
    text: string
    isComplete: boolean
  }
}
