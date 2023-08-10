<template>
  <h1>Halla</h1>
  <ShoppingCartLocaleStorage />
  <!-- <pre>{{ taskStore.myName }}</pre>
  <ArrayHelp @testing="TestingTheEmit" /> -->
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useTaskStore } from '../stores/TaskStore.js';

  import FilterAndSortExample from '../components/Development/FilterAndSortExample.vue';
  import ShoppingCartLocaleStorage from '../components/Development/ShoppingCartLocaleStorage.vue';
  import ArrayHelp from '../components/Development/ArrayHelp.vue';

  const taskStore = useTaskStore();

  // return {taskStore}

  const TestingTheEmit = (test) => {
    console.log('teeeesttttt', test);
  };
</script>
