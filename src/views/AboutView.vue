<template>
  <main class="mt-10 container mx-auto">
    <section>
      <div class="text-2xl flex justify-center xl:justify-start mb-10">
        <h1
          class="text-4xl inline-block after:absolute after:block after:h-1 after:bg-secondary after:w-[3ch]"
        >
          {{ pageTitle }}
        </h1>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  // Reactive variables
  const pageTitle = ref('About'); // Page title
</script>
