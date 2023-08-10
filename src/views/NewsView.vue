<template>
  <h1 className="text-3xl font-bold underline mt-[10%] md:mt-[5%] text-center mb-10">
    {{ pageTitle }}
  </h1>
  <NewsPage />
</template>

<script setup>
  import { ref } from 'vue';
  import NewsPage from '@/components/News/MainNewsPage.vue';

  const pageTitle = ref('News');
</script>
