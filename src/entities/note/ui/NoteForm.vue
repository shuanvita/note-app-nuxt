<script setup lang="ts">
import { NoteTodoItem } from '~/entities/note'

const formData = reactive({
  title: '',
  todo: [],
})
const check = ref(false)
</script>

<template>
  <form class="space-y-6" @submit.prevent>
    <UiInput label="Заголовок заметки" v-model="formData.title" />
    <div class="space-y-4">
      <div class="text-md">Добавить задачи</div>
      <NoteTodoItem id="" :is-completed="false" text="fgdsfdsfsd" />
    </div>
  </form>
</template>

<style scoped></style>
