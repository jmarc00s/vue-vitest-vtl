<script lang="ts" setup>
const emit = defineEmits(["onClick"]);
</script>

<template>
  <button
    @click="emit('onClick')"
    class="
      px-4
      py-2
      bg-slate-200
      text-slate-800
      rounded-sm
      shadow-slate-100 shadow-sm
      hover:bg-slate-300
    "
  >
    <slot></slot>
  </button>
</template>