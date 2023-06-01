<template>
  <h1 className="text-3xl font-bold underline">
    <p>{{ pageTitle }}</p>
  </h1>
</template>

<script setup>
  import { ref } from 'vue';

  const pageTitle = ref('News');
</script>
