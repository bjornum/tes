<template>
  <main>
    <!-- Iterate all the News Cards inside here -->
    <pre>{{ newsData }}</pre>
  </main>
</template>

<script setup>
  import { defineAsyncComponent, ref } from 'vue';
  import axios from 'axios';

  // Get the data from the API
  const newsData = ref([]);

  const tenant = ref(import.meta.env.VITE_TENANT_ID);

  const getAllNews = async () => {
    try {
      const response = await axios.get(
        `resource_management/news?mode=getpublicnews&tenant_id=${tenant.value}`
      );
      console.log(response.data);
      newsData.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getAllNews();

  /* To Do 
  1. Check the page it is on (Home or News)
    - Home 3-6 cards,  News All cards
  2. Get the data from the API using axios
    - Based on 1, get last 3-6 news, or all news.
  3. Display the data in the cards
  4. Import News Modal Component
  5. Through Props, open Modal and display correct Data
  6. Style the Modal accordingly.
  7. Import this Component into News and Home
*/
</script>
