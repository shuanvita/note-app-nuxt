<script setup lang="ts">
defineProps<{
  isCompleted: boolean
  text: string
}>()

defineEmits<{
  'delete-task': []
  'toggle-complete': []
}>()
</script>

<template>
  <div class="border-stroke flex items-center gap-2 border-b px-3 py-2">
    <UiCheckbox
      class="shrink-0"
      :modelValue="isCompleted"
      @update:modelValue="$emit('toggle-complete')"
    />
    <span :class="['flex-1', { 'text-foreground-muted/50 line-through': isCompleted }]">{{
      text
    }}</span>
    <UiButton variant="custom" @click="$emit('delete-task')">
      <template #icon>
        <IconDelete class="text-foreground-muted hover:text-danger h-4 w-4" name="delete" />
      </template>
    </UiButton>
  </div>
</template>

<style scoped></style>
