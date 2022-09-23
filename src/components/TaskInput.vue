<script lang="ts" setup>
import { ref } from "vue";
import Button from "./UI/Button.vue";

const emit = defineEmits(["onCreateTask"]);

let description = ref("");

const handleCreateTask = () => {
  if (!description.value) return;
  emit("onCreateTask", description.value);
  description.value = "";
};
</script>

<template>
  <form @submit.prevent="handleCreateTask" class="flex justify-center py-4">
    <input type="text" name="value" id="value" v-model="description" />
    <Button>Create task</Button>
  </form>
</template>

<style scoped>
.container {
  display: flex;
}
</style>