<template>
  <main class="mb-10">
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <template v-for="(news, newsIndex) in newsData" :key="newsIndex">
          <NewsCard
            :title="news.title"
            :image="news.media_url"
            :thumbnail="news.thumbnail_url"
            :description="news.description"
            :published="news.published"
            :author="news.author"
            :mediaID="news.media_id"
            :created="news.created"
            :updated="news.updated"
            :language="news.language"
            :ID="news.id"
            :showCardButton="true"
            class="mb-8 md:mb-0 cursor-pointer"
            @click="toggleModal(news)"
          />
        </template>
      </div>
    </section>

    <section>
      <GlobalModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="text-black p-10">
          <h1 class="text-2xl mb-1">{{ newsObject.title }}</h1>
          <div class="flex justify-center">
            <img
              :src="newsObject.media_url"
              :alt="newsObject.title"
              style="max-height: 200px; width: auto"
            />
          </div>
          <p v-html="newsObject.description" class="pl-5 pb-5 mb-0 pt-10"></p>

          <pre>{{ newsObject }}</pre>
        </div>
      </GlobalModal>
    </section>
  </main>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  // import { uid } from 'uid';
  import { defineAsyncComponent, ref, watchEffect } from 'vue';
  import axios from 'axios';

  // Router
  const route = useRoute();

  // Components
  const NewsCard = defineAsyncComponent(() => import('@/components/News/NewsCard.vue'));
  import GlobalModal from '@/components/BuildingBlocks/GlobalModal.vue';

  // Get the tenant ID from the .env file or Netlify
  const tenant = ref(import.meta.env.VITE_TENANT_ID);

  // Get the current route
  const currentRoute = ref('');

  // Get the data from the API
  const newsData = ref([]);

  // Get all news
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

  // Get the last six news from the API
  const getLastSixNews = async () => {
    try {
      const response = await axios.get(
        `resource_management/news?mode=getpublicnews&tenant_id=${tenant.value}`
      );
      console.log(response.data);
      const allNews = response.data;
      const lastSixNews = allNews.slice(-6); // Extract the last six articles
      console.log(lastSixNews);
      newsData.value = lastSixNews;
    } catch (error) {
      console.error(error);
    }
  };

  // Watches the PATH and changes the data accordingly
  watchEffect(() => {
    currentRoute.value = route.path;

    if (currentRoute.value.includes('news')) {
      console.log('News Page');
      getAllNews(); // Call getAllNews() when on the news page
    } else {
      console.log('Home Page');
      getLastSixNews(); // Call getLastSixNews() when on the home page
    }
  });

  /* ===== modal script ===== */

  const modalActive = ref(null);
  const newsObject = ref({});

  const toggleModal = (news) => {
    newsObject.value = news;
    modalActive.value = !modalActive.value;
    if (modalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
</script>
