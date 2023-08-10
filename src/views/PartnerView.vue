<template>
  <main class="mt-[5%]">
    <!-- Title and description if it are requested -->
    <section>
      <h1 className="text-3xl font-bold underline text-center mb-10 mt-10">{{ pageTitle }}</h1>
    </section>

    <!-- Mid section and Link button -->
    <section class="container mx-auto px-4 mb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <template v-for="partner in partnerCards" :key="partner.title">
          <div class="card w-full bg-neutral rounded-none text-grayText shadow-md">
            <!-- <p class="text-center text-[36px] mb-5">{{ partner.title }}</p> -->

            <div class="flex justify-center mb-10 pt-10">
              <!-- <img class="h-24 w-56" :src="`${partner.logo}`" alt="Partner Logo" /> -->
              <!-- <img class="h-24 w-56" src="imageTest" alt="Partner Logo" /> -->
              <!-- <pre>{{ imageTest }}</pre> -->
              <img
                v-if="
                  partner.title == 'Gabrovo Chamber of Commerce and Industry' ||
                  partner.title == 'Габровска търговско-промишлена палата'
                "
                class="h-24 w-56"
                src="@/assets/images/ProjectLogo.png"
                alt="Partner Logo"
              />
              <img
                v-if="partner.title == 'Prios Kompetanse AS' || partner.title == 'Приос Компетанс'"
                class="h-24 w-56"
                src="@/assets/images/ProjectLogo.png"
                alt="Partner Logo"
              />
            </div>
            <div class="flex items-center h-24">
              <span class="text-3xl pl-5" v-html="partner.title"></span>
              <a :href="partner.link" class="ml-2 pl-5" target="_blank" v-if="partner.link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
            <div class="text-center mt-10 mb-10">
              <button @click="toggleModal(partner)">Read More</button>
            </div>
          </div>
          <GlobalModal :modalActive="modalActive" @close-modal="toggleModal">
            <!-- Title -->
            <p class="mt-10 text-center text-3xl mb-10">{{ partnerData.title }}</p>
            <!-- Image -->
            <div class="flex justify-center mb-10">
              <!-- <img class="h-24 w-56" :src="`${partner.logo}`" alt="Partner Logo" /> -->
              <!-- <pre>{{ imageTest }}</pre> -->
              <img
                v-if="partner.title == 'Gabrovo Chamber of Commerce and Industry'"
                class="h-24 w-56"
                src="@/assets/images/ProjectLogo.png"
                alt="Partner Logo"
              />
              <img
                v-if="partner.title == 'Prios Kompetanse AS'"
                class="h-24 w-56"
                src="@/assets/images/ProjectLogo.png"
                alt="Partner Logo"
              />
            </div>
            <!-- Description -->
            <p>{{ partnerData.description }}</p>
            <!-- Link -->
            <div class="mt-10" v-if="partnerData.link">
              <a :href="partnerData.link" target="_blank">
                <button>Go to Page</button>
              </a>
            </div>
            <br />
          </GlobalModal>
        </template>
      </div>
    </section>

    <!-- Read More -->
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  import GlobalModal from '@/components/BuildingBlocks/GlobalModal.vue';

  const pageTitle = ref('Partners');

  const imageTest = '@/assets/images/ProjectLogo.png';

  const partnerCards = ref([
    { title: '', description: '', link: '', image: '' },
    { title: '', description: '', link: '', image: '' },
  ]);

  partnerCards.value[0].title = t('partnerPage.partnerOne.title');
  partnerCards.value[0].description = t('partnerPage.partnerOne.description');
  partnerCards.value[0].link = t('partnerPage.partnerOne.link');

  partnerCards.value[0].image = '@/assets/images/ProjectLogo.png';

  partnerCards.value[1].title = t('partnerPage.partnerTwo.title');
  partnerCards.value[1].description = t('partnerPage.partnerTwo.description');
  partnerCards.value[1].link = t('partnerPage.partnerTwo.link');
  // partnerCards.value[0].image = '@/assets/images/ProjectLogo.png';

  const partnerData = ref({
    title: '',
    description: '',
    image: '',
    link: '',
  });

  const modalActive = ref(null);
  const toggleModal = (data) => {
    if (data) {
      partnerData.value.title = data.title;
      partnerData.value.description = data.description;
      partnerData.value.image = data.image;
      partnerData.value.link = data.link;
    }
    modalActive.value = !modalActive.value;
    if (modalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
</script>
