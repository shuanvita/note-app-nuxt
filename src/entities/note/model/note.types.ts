export interface Note {
  id: string
  title: string
  todo: NoteTodo[]
}

export interface NoteTodo {
  id: string
  title: string
  isComplete: boolean
}
