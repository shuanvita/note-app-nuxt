<script setup lang="ts">
defineProps<{
  label?: string
  disabled?: boolean
}>()

const uniqueId = useId()
const modelValue = defineModel<boolean>()
</script>

<template>
  <div class="inline-flex items-center">
    <input
      :id="uniqueId"
      v-model="modelValue"
      class="checkbox"
      type="checkbox"
      :disabled="disabled"
    />
    <label class="custom-checkbox" :for="uniqueId" :class="{ 'is-disabled': disabled }">
      <svg class="checkbox-icon" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.33299 2.5L3.75012 7.083L1.66699 4.99982"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
        />
      </svg>

      <span v-if="label" class="checkbox-label">{{ label }}</span>
    </label>
  </div>
</template>

<style scoped>
.checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-checkbox {
  position: relative;
  padding-inline-start: 30px;
  cursor: pointer;
}

.custom-checkbox.is-disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.custom-checkbox::before {
  content: '';
  width: 18px;
  height: 18px;
  box-shadow: inset 0 0 0 2px var(--color-stroke);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  transition:
    background 0.15s ease,
    box-shadow 0.15s ease;
}

.checkbox-icon {
  position: absolute;
  top: 50%;
  left: 3px;
  width: 13px;
  height: 13px;
  transform: translateY(-50%) scale(0);
  transition: transform 0.15s ease;
  color: white;
  pointer-events: none;
}

.checkbox:checked + .custom-checkbox::before {
  box-shadow: none;
  background: var(--color-primary);
}

.checkbox:checked + .custom-checkbox .checkbox-icon {
  transform: translateY(-50%) scale(1);
}

.checkbox:focus-visible + .custom-checkbox::before {
  outline: 2px solid var(--color-stroke);
  outline-offset: 2px;
}
</style>
