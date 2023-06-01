<template>
  <main>
    <!-- Into image, title and Subtitle -->
    <section>
      <div class="card w-5/6 rounded-none text-grayText shadow-md mx-auto bg-gray-300 h-[600px]">
        <p class="text-[36px] md:text-[48px] mt-[35%] md:mt-[20%] text-[white] ml-[15%]">
          Welcome to {{ projectName }} Project
        </p>
        <p class="text-[18px] md:text-[28px] text-[#434343;] ml-[15%] font-bold">
          Sub page Title Comment
        </p>
      </div>
    </section>

    <!-- 3 Cards in center of cards -->
    <section class="container mx-auto px-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(item, index) in testArray" :key="index" class="mt-10">
          <router-link :to="item.path">
            <div
              class="card w-full bg-neutral rounded-none text-grayText shadow-md top-[-5em] right-[50] p-[10px]"
              :style="{ position: 'relative' }"
            >
              <div :style="{ backgroundColor: dividerColorArray[index] }" class="p-[2px]"></div>
              <div>
                <div class="grid grid-cols-9 gap-2">
                  <div class="col-span-9">
                    <p class="pt-2 pageCardTitle">{{ item.name }}</p>
                  </div>
                  <div class="col-span-2 pl-0">
                    <!-- <i class="text-2xl pt-2 pageCardArrow">mdi-arrow-right</i> -->
                    <i class="text-2xl pt-2 text-[#205072] mdi mdi-arrow-right"></i>
                  </div>
                  <div class="col-span-12 pa-0 px-2">
                    <p class="pageCardDescription">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Info Text -->
    <section class="container mx-auto px-4">
      <p class="mb-15 pt-0 mt-0 text-center text-[#6A6A6A] font-normal">
        The projectTemplate project aims to Lorem Ipsum Dolores Bla Bla Bla. The concept should
        enable projectTemplate to do even more Lorem Ipsum!
      </p>
    </section>

    <!-- Import News Module here -->
    <section></section>

    <!-- See all news button - go to page - make it within the News Module, aka display once news got content -->
    <section></section>

    <!-- Import RSS Module Here -->
    <section></section>
  </main>
</template>

<script setup>
  import { ref } from 'vue';

  const projectName = ref('projectTemplate');
  const dividerColorArray = ref(['#205072', '#329D9C', '#D83636', '#DD9A30']);

  const testArray = ref([
    { name: 'About', description: 'About description', path: '/about' },
    { name: 'Partners', description: 'Partners description', path: '/partner' },
    { name: 'Resources', description: 'Resources description', path: '/resources' },
  ]);
</script>
