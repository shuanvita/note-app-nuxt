<script lang="ts" setup>
type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

interface ModalProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const props = withDefaults(defineProps<ModalProps>(), { size: 'md' })

const isOpen = defineModel<boolean>({ required: true })

const closeOnOverlayClick = () => {
  isOpen.value = false
}

const sizeClasses: Record<ModalSize, string> = {
  sm: 'max-w-sm rounded-2xl',
  md: 'max-w-md rounded-2xl',
  lg: 'max-w-lg rounded-2xl',
  xl: 'max-w-xl rounded-2xl',
  full: 'max-w-[100vw] h-[100vh] rounded-none',
}

const modalSizeClass = computed(() => sizeClasses[props.size])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-999 flex items-center justify-center bg-black/60"
        role="dialog"
        aria-modal="true"
        @keydown.esc="closeOnOverlayClick"
        @click="closeOnOverlayClick"
      >
        <div
          :class="['relative w-full min-w-75 bg-white p-6 shadow-lg', modalSizeClass]"
          @click.stop
        >
          <slot />
          <button
            class="text-foreground-muted hover:text-foreground absolute top-6 right-6 cursor-pointer"
            type="button"
            @click="closeOnOverlayClick"
          >
            <IconCancel class="h-5 w-5" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
