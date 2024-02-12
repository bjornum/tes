<template>
  <main class="mt-[5]">
    <p>Add a new exercise</p>
    <form>
      <!-- Name of Exercise -->
      <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          id="nameOfExercise"
          class="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Name of the Exercise"
        />
      </div>
      <!-- Exercise Targeted Area -->
      <!-- Exercise Description -->
      <!-- Exercise Equipment -->
    </form>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const exerciseName = ref('Add a new exercise');
</script>
