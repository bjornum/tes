<template>
  <nav>
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" ref="drawerCheckbox" />
      <div class="drawer-content flex flex-col min-h-screen">
        <!-- Navbar -->
        <div class="w-full navbar shadow-md bg-base-100 h-[64px]">
          <div class="container mx-auto px-4 md:px-20">
            <div class="pr-2 pl-0 mr-auto">
              <router-link to="/">
                <img
                  v-if="showImage == 'true'"
                  src="@/assets/images/eu-logo.jpg"
                  alt="Project Logo"
                  width="131"
                />
                <p v-if="showImage == 'false'">{{ $t('projectDetails.projectName') }}</p>
              </router-link>
            </div>
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <!-- Sidebar Menu on smaller screens -->
            <div class="flex-none hidden lg:block">
              <ul
                class="menu menu-horizontal flex items-center font-bold"
                :class="displayLanguageSelector == 'true' ? 'last:pr-0' : ''"
              >
                <!-- Navbar menu content here -->

                <!-- ######################## -->
                <!-- ADD THIS CLASS class="pr-0" ON THE LAST <router-link></router-link> IF THE LANGUAGE SELECTOR IS NOT DISPLAYED -->
                <!-- ######################## -->
                <li
                  v-if="displayHome == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/' }"
                >
                  <router-link to="/">{{ $t('projectRoutes.home') }}</router-link>
                </li>
                <li
                  v-if="displayAbout == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/about' }"
                >
                  <router-link to="/about">{{ $t('projectRoutes.about') }}</router-link>
                </li>
                <li
                  v-if="displayPartner == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/partners' }"
                >
                  <router-link to="/partners">{{ $t('projectRoutes.partners') }}</router-link>
                </li>
                <li
                  v-if="displayNews == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/news' }"
                >
                  <router-link to="/news">{{ $t('projectRoutes.news') }}</router-link>
                </li>
                <li
                  v-if="displayTraining == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/course' }"
                >
                  <router-link to="/course">{{ $t('projectRoutes.training') }}</router-link>
                </li>
                <li
                  v-if="displayResources == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/resources' }"
                >
                  <router-link to="/resources">{{ $t('projectRoutes.resources') }}</router-link>
                </li>
                <li
                  v-if="displayContact == 'true'"
                  :class="{ 'focus:bg-primary bg-primary': $route.path === '/contact' }"
                >
                  <router-link to="/contact">{{ $t('projectRoutes.contact') }}</router-link>
                </li>
                <div v-if="displayLanguageSelector == 'true'">
                  <LanguageSelector />
                </div>
              </ul>
            </div>
          </div>
        </div>
        <!-- Page content here -->
        <RouterView />
        <Footer v-if="shouldShowFooter" />
      </div>
      <div class="drawer-side z-50">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 w-80 min-h-full bg-base-300 font-bold">
          <!-- Sidebar content here -->
          <li v-if="displayHome == 'true'">
            <router-link to="/" @click="handleClick()">{{ $t('projectRoutes.home') }}</router-link>
          </li>
          <li v-if="displayAbout == 'true'">
            <router-link to="/about" @click="handleClick()">{{
              $t('projectRoutes.about')
            }}</router-link>
          </li>
          <li v-if="displayPartner == 'true'">
            <router-link to="/partners" @click="handleClick()">{{
              $t('projectRoutes.partners')
            }}</router-link>
          </li>
          <li v-if="displayNews == 'true'">
            <router-link to="/news" @click="handleClick()">{{
              $t('projectRoutes.news')
            }}</router-link>
          </li>
          <li v-if="displayTraining == 'true'">
            <router-link to="/course" @click="handleClick()">{{
              $t('projectRoutes.training')
            }}</router-link>
          </li>
          <li v-if="displayResources == 'true'">
            <router-link to="/resources" @click="handleClick()">{{
              $t('projectRoutes.resources')
            }}</router-link>
          </li>
          <li v-if="displayContact == 'true'">
            <router-link to="/contact" @click="handleClick()">{{
              $t('projectRoutes.contact')
            }}</router-link>
          </li>
          <div v-if="displayLanguageSelector == 'true'">
            <LanguageSelector />
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { ref, defineAsyncComponent, computed } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import { useRoute } from 'vue-router';
  import LanguageSelector from '@/components/Global/LanguageSelector.vue';
  import Footer from '@/components/Global/Footer.vue';

  const ContactUsForm = defineAsyncComponent(() => import('@/components/Global/ContactUsForm.vue'));

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  //refs
  const drawerCheckbox = ref(null);

  // handle click on navbar mobile
  const handleClick = () => {
    drawerCheckbox.value.checked = !drawerCheckbox.value.checked;
  };
  // router const
  const route = useRoute();

  const shouldShowFooter = computed(() => {
    return !route.path.includes('/course/');
  });

  /* =====  Navbar Settings ===== */

  // Show Project Logo or Project Name
  const showImage = t('projectSettings.navbarSettings.displayLogo');
  // Display Links in Navbar
  const displayHome = t('projectSettings.navbarSettings.home');
  const displayAbout = t('projectSettings.navbarSettings.about');
  const displayPartner = t('projectSettings.navbarSettings.partners');
  const displayNews = t('projectSettings.navbarSettings.news');
  const displayTraining = t('projectSettings.navbarSettings.training');
  const displayResources = t('projectSettings.navbarSettings.resources');
  const displayContact = t('projectSettings.navbarSettings.contact');
  const displayLanguageSelector = t('projectSettings.navbarSettings.languageChanger');
</script>

<style scoped>
  .menu :where(li:not(.menu-title) > *:not(ul):not(details):not(.menu-title)),
  .menu :where(li:not(.menu-title) > details > summary:not(.menu-title)) {
    border-radius: 0px !important;
  }
</style>
