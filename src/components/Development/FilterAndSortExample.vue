<template>
  <!-- Page title and UI elements -->
  <h1 class="text-3xl font-bold underline">
    <p>{{ pageTitle }}</p>

    <!-- Sorting buttons -->
    <button @click="sortData('name')">Sort by Name</button>
    <button @click="sortData('description')">Sort by Description</button>

    <!-- Search input field -->
    {{ search }}
    <input
      type="text"
      v-model="search"
      class="border border-gray-300 rounded-md p-2 w-full"
      placeholder="Search"
    />

    <!-- Iterate over filtered and sorted data -->
    <template v-for="person in sortedData">
      <p>{{ person.name }}</p>
      <p>{{ person.description }}</p>
    </template>
  </h1>
</template>

<script setup>
  import { ref, computed } from 'vue';

  // Reactive variables
  const pageTitle = ref('About'); // Page title
  const search = ref(''); // Search input value
  const myData = ref([
    // Array of data objects
    {
      name: 'bob',
      description: 'Jobby',
    },
    {
      name: 'joe',
      description: 'aoey',
    },
    {
      name: 'jim',
      description: 'bimmy',
    },
  ]);

  // Computed property for filtered data
  const filteredData = computed(() => {
    return myData.value.filter((person) => {
      return person.name.toLowerCase().includes(search.value.toLowerCase());
    });
  });

  const sortParam = ref(''); // Selected sorting parameter

  // Computed property for sorted data
  const sortedData = computed(() => {
    if (sortParam.value === 'name') {
      return [...filteredData.value].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortParam.value === 'description') {
      return [...filteredData.value].sort((a, b) => a.description.localeCompare(b.description));
    } else {
      return filteredData.value;
    }
  });

  // Function to handle sorting
  const sortData = (sortBy) => {
    sortParam.value = sortBy;
  };
</script>
