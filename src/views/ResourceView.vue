<template>
  <main class="mt-[5%]">
    <h1 className="text-3xl font-bold underline">
      <p>{{ pageTitle }}</p>
    </h1>
    <p>ajasdads</p>
    <pre>{{ newsData }}</pre>
    <p>asd</p>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const pageTitle = ref('Resources');
  const newsData = ref([]);

  // Get all news
  const myTest = async () => {
    try {
      const response = await axios.get(
        `https://complete-mongoserver-bjornum.onrender.com/books?page=0`
      );
      console.log(response.data);
      newsData.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  myTest();
</script>
