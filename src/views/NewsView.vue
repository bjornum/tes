<template>
  <h1 className="text-3xl font-bold underline">{{ pageTitle }}</h1>
  <NewsPage />
</template>

<script setup>
  import { ref } from 'vue';
  import NewsPage from '@/components/News/MainNewsPage.vue';

  const pageTitle = ref('News');
</script>
