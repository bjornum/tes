<template>
  <main>
    <!-- Title and description if it are requested -->
    <section>
      <h1 className="text-3xl font-bold underline">{{ pageTitle }}</h1>
    </section>

    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <template v-for="partner in projectPartners" :key="partner.title">
          <div class="card w-full bg-neutral rounded-none text-grayText shadow-md">
            <p>{{ partner.title }}</p>

            <div class="flex justify-center">
              <img class="h-24 w-56" :src="partner.image" alt="Partner Logo" />
            </div>

            <div v-html="partner.description"></div>

            <a :href="partner.link">{{ partner.title }}</a>
            <pre>{{ partner }}</pre>
          </div>
        </template>
      </div>
    </section>

    <!-- Partners -->
    <section>
      <template v-for="partner in projectPartners" :key="partner.title"> </template>
    </section>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  const pageTitle = ref('Partners');

  // Example Array, will be i18n friendly in the future
  const projectPartners = ref([
    {
      title: 'Partner 1',
      description: `
        <p><strong>Partner 1</strong> is a partner of the project.</p>
        <p>Partner 1 is a partner of the project.</p>
      `,
      image: 'https://picsum.photos/200/300',
      link: 'https://www.google.com',
    },
    {
      title: 'Partner 2',
      description:
        '<p><strong>Partner 2</strong> is a partner of the project.</p> <p>Partner 2 is a partner of the project.</p>',
      image: 'https://picsum.photos/200/300',
      link: 'https://www.google.com',
    },
    {
      title: 'Partner 3',
      description: `
        <p><strong>Partner 3</strong> is a partner of the project.</p>
        <p>Partner 3 is a partner of the project.</p>
      `,
      image: 'https://picsum.photos/200/300',
      link: 'https://www.google.com',
    },
  ]);
</script>
