<template>
  <!-- Page title -->
  <h1 class="text-3xl font-bold underline text-center mt-[5%]">
    {{ pageTitle }}
  </h1>

  <!-- Project text, badges and image -->
  <section class="container mx-auto px-4 grid grid-cols-12 mt-[5%]">
    <!-- Text and Badges -->
    <div class="col-span-12 md:col-span-7">
      <p class="mb-5">{{ $t('aboutPage.aboutTheProject') }}</p>
      <div class="grid grid-cols-12 mb-10 md:mb-0">
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeOne') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeTwo') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeThree') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeFour') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeFive') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeSix') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeSeven') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeEight') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeNine') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeTen') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeEleven') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeTwelve') }}</p>
        </div>
        <div class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3">
          <p class="text-1xl font-bold pt-2 pb-2 text-center">{{ $t('aboutPage.badgeEleven') }}</p>
        </div>
        <div
          class="col-span-3 md:col-span-4 bg-secondary rounded-[12px] mx-3 mb-3"
          v-if="$t('aboutPage.badgeFourteen')"
        >
          <p class="text-1xl font-bold pt-2 pb-2 text-center">
            {{ $t('aboutPage.badgeFourteen') }}
          </p>
        </div>
      </div>
    </div>
    <!-- Image -->
    <div class="col-span-12 md:col-span-5 md:ml-10">
      <img src="@/assets/images/exampleImage.jpg" alt="Project Logo" />
    </div>
  </section>

  <!-- The Goal -->
  <section class="container mx-auto px-4 grid grid-cols-12 mt-[5%]">
    <!-- Image -->
    <div class="col-span-12 md:col-span-5 order-last md:order-first">
      <img src="@/assets/images/exampleImage.jpg" alt="Project Logo" />
    </div>
    <!-- Title and text -->
    <div class="col-span-12 md:col-span-7 mx-5 ml-10 mb-5 md:mb-0">
      <p class="text-3xl font-bold pt-2 pb-2">The Goal</p>
      <p>{{ $t('aboutPage.goalsOfTheProject') }}</p>
    </div>
  </section>

  <!-- For Whom -->
  <section class="container mx-auto px-4 grid grid-cols-12 mt-[5%]">
    <!-- Image -->
    <div class="col-span-12 md:col-span-7 mb-5 md:mb-0 mx-5">
      <p class="text-3xl font-bold pt-2 pb-2">For Whom</p>
      <p>{{ $t('aboutPage.whoTheProjectIsFor') }}</p>
    </div>
    <!-- Image -->
    <div class="col-span-12 md:col-span-5">
      <img src="@/assets/images/exampleImage.jpg" alt="Project Logo" />
    </div>
  </section>

  <!-- Why -->
  <section class="container mx-auto grid grid-cols-12 mb-[5%] mt-10">
    <!-- Image -->
    <div class="col-span-12 md:col-span-5 ml-5 mr-5 md:mt-12 order-last md:order-first">
      <img src="@/assets/images/exampleImage.jpg" alt="Project Logo" />
    </div>
    <!-- Title and text -->
    <div class="col-span-12 md:col-span-7 mx-10 mb-5 md:mb-0">
      <p class="text-3xl font-bold pt-2 pb-2">Why</p>
      <p>{{ $t('aboutPage.whyOfTheProject') }}</p>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  // Reactive variables
  const pageTitle = ref('About'); // Page title
</script>
