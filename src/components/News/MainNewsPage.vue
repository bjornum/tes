<template>
  <main class="mb-10">
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <template v-for="(news, newsIndex) in newsData" :key="newsIndex">
          <GlobalCard
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
            @click="getNewsData(news)"
          />
        </template>
      </div>
    </section>

    <section>
      <GlobalModal :modalActive="modalActive" @close-modal="toggleModal">
        <div class="p-10 text-grayText">
          <h1 class="text-2xl mb-5">{{ newsObject.title }}</h1>
          <div class="flex justify-center">
            <img
              :src="newsObject.media_url"
              :alt="newsObject.title"
              style="max-height: 200px; width: auto"
              @click="toggleImageModal(newsObject.media_url)"
            />
          </div>
          <p v-html="newsObject.description" class="pl-5 pb-5 mb-0 pt-10"></p>

          <div style="display: flex; flex-wrap: wrap">
            <div
              v-for="item in newsDataContent"
              :key="item.id"
              style="padding: 5px"
              :style="{ 'flex-basis': (parseInt(item.widthClass.split('-')[2]) / 12) * 100 + '%' }"
            >
              <div class="grid grid-cols-auto">
                <div :class="item.widthClass + (item.widthClass === 'col-span-6' ? ' w-full' : '')">
                  <div v-if="item.type == 'text'">
                    <p v-html="item.content"></p>
                  </div>
                  <div v-if="item.type == 'image'">
                    <img
                      :src="item.content"
                      alt=""
                      style="object-fit: cover"
                      @click="toggleImageModal(item.content)"
                    />
                  </div>
                  <div v-if="item.type == 'youtube_video'">
                    <iframe
                      :src="item.content"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      style="width: 100%; height: 400px"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlobalModal>
    </section>

    <!-- ===== Image Modal ===== -->
    <section>
      <GlobalModal
        :modalActive="imageModalActive"
        @close-modal="toggleImageModal"
        :typeOfModal="typeOfModal"
      >
        <div class="p-10 text-grayText">
          <div class="flex justify-center">
            <img
              @click="closeModal(false)"
              :src="imageObject"
              alt="News Image"
              style="max-height: auto; width: auto"
            />
          </div>
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
  const GlobalCard = defineAsyncComponent(() =>
    import('@/components/BuildingBlocks/GlobalCard.vue')
  );
  import GlobalModal from '@/components/BuildingBlocks/GlobalModal.vue';

  // Get the tenant ID from the .env file or Netlify
  const tenant = ref(import.meta.env.VITE_TENANT_ID);

  // Get the current route
  const currentRoute = ref('');

  // Get the data from the API
  const newsData = ref([]);

  const newsDataContent = ref([]);

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

  // Get ALL data from news clicked
  const getNewsData = async (news) => {
    newsObject.value = news;

    try {
      const response = await axios.get(
        `resource_management/news_content?mode=getpublicnews&news_id=${news.id}`
      );
      const data = response.data;
      console.log(data);

      // Create a new array with width classes
      const newData = data.map((item) => {
        if (item.class_list) {
          const xsWidth = parseInt(item.class_list.split('xs')[1], 10);
          // const widthClass = `w-${xsWidth}/12`;
          const widthClass = `col-span-${xsWidth}`;
          return { ...item, widthClass };
        }
        return item;
      });

      newsDataContent.value = newData;
      toggleModal(newsDataContent.value, newsData.value);
    } catch (error) {
      console.error(error);
    }
  };

  /* ===== modal script ===== */

  const modalActive = ref(null);
  const newsObject = ref({});

  const toggleModal = (news) => {
    modalActive.value = !modalActive.value;
    if (modalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };

  /* ===== image modal script ===== */

  const imageModalActive = ref(false);
  const imageObject = ref({});
  const typeOfModal = ref('image');

  const closeModal = (state) => {
    imageModalActive.value = state;
  };

  const toggleImageModal = (image) => {
    imageObject.value = image;
    imageModalActive.value = !imageModalActive.value;
    if (imageModalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
</script>
