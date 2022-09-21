<script lang="ts" setup>
import { Task } from "../interfaces/task";

defineProps<{ task: Task }>();
</script>

<template>
  <li>{{ task.description }}</li>
</template>

<style scoped>
</style>