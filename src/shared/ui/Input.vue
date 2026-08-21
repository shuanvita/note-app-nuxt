<script setup lang="ts">
defineOptions({ inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    label?: string
    type?: 'text' | 'password' | 'checkbox' | 'radio' | 'email'
    name?: string
    disabled?: boolean
  }>(),
  {
    type: 'text',
    disabled: false,
  },
)

const uniqueId = useId()
const inputName = computed(() => props.name ?? uniqueId)

const modelValue = defineModel<string>()
</script>

<template>
  <div>
    <label v-if="label" :for="uniqueId" class="mb-1 block text-sm text-gray-500">{{ label }}</label>
    <input
      :id="uniqueId"
      :name="inputName"
      class="text-foreground-muted border-stroke focus:outline-primary w-full rounded-lg border px-4 py-2.5"
      v-bind="$attrs"
      v-model="modelValue"
      :type="type"
      :disabled="disabled"
    />
  </div>
</template>
