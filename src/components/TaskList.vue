<script lang="ts" setup>
import { Task } from "interfaces/task";
import TaskItem from "TaskItem.vue";

defineProps<{ tasks: Task[] }>();
</script>

<template>
  <ul>
    <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
  </ul>
</template>

<style>
</style>