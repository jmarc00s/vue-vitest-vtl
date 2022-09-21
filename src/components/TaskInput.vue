<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits(["onCreateTask"]);

let description = ref("");

const handleCreateTask = () => {
  if (!description.value) return;
  emit("onCreateTask", description.value);
  description.value = "";
};
</script>

<template>
  <form @submit.prevent="handleCreateTask" class="container">
    <input type="text" name="value" id="value" v-model="description" />
    <button>Create task</button>
  </form>
</template>

<style scoped>
.container {
  display: flex;
}
</style>