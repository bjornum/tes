<template>
  <main>
    <!-- Into image, title and Subtitle -->
    <section style="z-index: 1">
      <div class="card w-5/6 rounded-none text-grayText shadow-md mx-auto bg-gray-300 h-[600px]">
        <p class="text-[36px] md:text-[48px] mt-[35%] md:mt-[20%] text-[white] ml-[15%]">
          {{ $t('homePage.mainTitle') }}
        </p>
        <p class="text-[18px] md:text-[28px] text-[#434343;] ml-[15%] font-bold">
          {{ $t('homePage.mainDescription') }}
        </p>
      </div>
    </section>

    <!-- 3 Cards in center of cards -->
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(item, index) in pageCards" :key="index" class="mt-10">
          <router-link :to="item.path">
            <div
              class="card w-full bg-neutral rounded-none text-grayText shadow-md top-[-5em] right-[50] p-[10px]"
              :style="{ position: 'relative' }"
            >
              <div :style="{ backgroundColor: dividerColorArray[index] }" class="p-[2px]"></div>
              <div>
                <div class="grid grid-cols-9 gap-2 p-7">
                  <div class="col-span-9">
                    <p class="pt-2 text-3xl">{{ item.name }}</p>
                  </div>
                  <div class="col-span-2 pl-0">
                    <i class="text-5xl pt-2 text-[#205072] mdi mdi-arrow-right"></i>
                  </div>
                  <div class="col-span-12 pa-0 px-2">
                    <p class="text-1xl h-10">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <p>{{ name }}</p>

    <!-- Info Text -->
    <section class="container mx-auto px-4 w-1/4 mb-10">
      <p class="mb-15 pt-0 mt-0 text-center text-[#6A6A6A] font-normal text-2xl">
        {{ $t('homePage.smallText') }}
      </p>
    </section>

    <!-- Import News Module here -->
    <section>
      <NewsModule />
    </section>

    <!-- See all news button - go to page - make it within the News Module, aka display once news got content -->
    <section></section>

    <!-- Import RSS Module Here -->
    <section></section>
  </main>
</template>

<script setup>
  import { ref, inject } from 'vue';

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  import NewsModule from '@/components/News/MainNewsPage.vue';

  const dividerColorArray = ref(['#205072', '#329D9C', '#D83636', '#DD9A30']);

  const pageCards = ref([
    { name: '', description: '', path: '/resources' },
    { name: 'Partners', description: 'Partners description', path: '/partner' },
    { name: 'Resources', description: 'Resources description', path: '/about' },
  ]);

  pageCards.value[0].name = t('homePage.cardOneTitle');
  pageCards.value[0].description = t('homePage.cardOneDescription');
  pageCards.value[1].name = t('homePage.cardTwoTitle');
  pageCards.value[1].description = t('homePage.cardTwoDescription');
  pageCards.value[2].name = t('homePage.cardThreeTitle');
  pageCards.value[2].description = t('homePage.cardThreeDescription');
</script>
