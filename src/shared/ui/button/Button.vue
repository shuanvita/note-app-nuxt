<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'danger'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
  },
)

const slots = useSlots()

const variants = {
  primary: 'bg-primary hover:bg-primary-hover text-white',
  secondary: 'border border-stroke text-foreground-muted hover:bg-secondary-hover',
  danger: 'bg-danger hover:bg-danger-hover text-white',
}
</script>

<template>
  <button
    :class="[
      'inline-flex h-8 cursor-pointer items-center justify-center gap-2 rounded-md px-3 font-medium',
      variants[variant],
    ]"
    :type="type"
    :disabled="disabled"
  >
    <slot v-if="slots.icon" name="icon" />
    <template v-else>
      <slot name="preIcon" />
      <slot />
      <slot name="postIcon" />
    </template>
  </button>
</template>
