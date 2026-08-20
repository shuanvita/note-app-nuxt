<script setup lang="ts"></script>

<template>
  <header class="border-stroke border-b py-4">
    <div class="container flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <div class="bg-primary rounded-md p-2">
          <IconNote class="h-4 w-4 text-white" />
        </div>
        <span class="text-lg font-bold">App Note on Nuxt</span>
      </div>
      <UiButton>
        <template #preIcon>
          <IconPlus class="h-4 w-4 text-white" />
        </template>
        New Note
      </UiButton>
    </div>
  </header>
</template>

<style scoped></style>
