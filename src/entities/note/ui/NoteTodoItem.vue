<script setup lang="ts">
const props = defineProps<{
  isCompleted: boolean
  text: string
}>()

const emit = defineEmits<{
  'delete-task': []
  'toggle-complete': []
  'update-text': [value: string]
}>()

const isEditing = ref(false)
const draftText = ref(props.text)

function startEdit() {
  draftText.value = props.text
  isEditing.value = true
}

function saveEdit() {
  const value = draftText.value.trim()
  if (value && value !== props.text) {
    emit('update-text', value)
  }
  isEditing.value = false
}
</script>

<template>
  <div class="border-stroke flex items-center gap-2 border-b px-3 py-2">
    <UiCheckbox
      class="shrink-0"
      :modelValue="isCompleted"
      @update:modelValue="$emit('toggle-complete')"
    />

    <UiInput
      v-if="isEditing"
      class="flex-1"
      v-model="draftText"
      @keyup.enter="saveEdit"
      @blur="saveEdit"
    />
    <span
      v-else
      :class="['flex-1 cursor-text', { 'text-foreground-muted/50 line-through': isCompleted }]"
      @click="startEdit"
    >
      {{ text }}
    </span>

    <UiButton variant="custom" @click="$emit('delete-task')">
      <template #icon>
        <IconDelete class="text-foreground-muted hover:text-danger h-4 w-4" name="delete" />
      </template>
    </UiButton>
  </div>
</template>

<style scoped></style>
