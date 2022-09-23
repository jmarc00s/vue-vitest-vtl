<script setup lang="ts">
import { ref } from "vue";
import { Task } from "./interfaces/task";
import TaskList from "components/TaskList.vue";
import TaskInput from "components/TaskInput.vue";

const tasks = ref<Task[]>([
  {
    id: 1,
    description: "Teste",
  },
]);

const handleCreateTask = (description: string): void => {
  tasks.value.push({ description, id: Math.random() * 1000 });
};
</script>

<template>
  <main class="min-h-screen flex flex-col items-center p-16">
    <h1 class="text-3xl font-bold">Task App vue3</h1>
    <TaskInput @on-create-task="handleCreateTask" />
    <TaskList :tasks="tasks" />
  </main>
</template>

<style scoped>
</style>
