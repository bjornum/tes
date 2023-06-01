<template>
  <main>
    <!-- Iterate all the News Cards inside here -->
  </main>
</template>

<script setup>
  import { defineAsyncComponent, ref } from 'vue';

  // Get the data from the API
  const newsData = ref([]);

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
