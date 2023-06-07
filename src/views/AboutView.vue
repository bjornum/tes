<template>
  <h1 className="text-3xl font-bold underline">
    <p>{{ pageTitle }}</p>

    {{ search }}

    <input
      type="text"
      v-model="search"
      class="border border-gray-300 rounded-md p-2 w-full"
      placeholder="Search"
    />

    <template v-for="person in filteredData">
      <p>{{ person.name }}</p>
      <p>{{ person.description }}</p>
    </template>
  </h1>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const pageTitle = ref('About');

  const search = ref('');

  const myData = ref([
    {
      name: 'bob',
      description: 'bobby',
    },
    {
      name: 'joe',
      description: 'joey',
    },
    {
      name: 'jim',
      description: 'jimmy',
    },
  ]);

  const filteredData = computed(() => {
    return myData.value.filter((person) => {
      return person.name.toLowerCase().includes(search.value.toLowerCase());
    });
  });
</script>
