<template>
  <h1 className="text-3xl font-bold ">
    <h1>{{ pageTitle }}</h1>
    <p class="text-error">{{ $t('greetings') }}</p>
  </h1>
</template>

<script setup>
  import { ref } from 'vue';
  const pageTitle = ref('Home');
</script>
