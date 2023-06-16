<template>
  <nav class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <nav class="w-full navbar bg-base-300">
        <!-- Navbar Left Side Image or Name -->
        <div class="flex-auto px-2 mx-2">
          <a href="/">
            <img
              v-if="showImage == 'true'"
              src="@/assets/images/ProjectLogo.png"
              alt="Project Logo"
              style="max-height: 40px; width: auto"
            />

            <p v-if="showImage == 'false'">{{ $t('projectDetails.projectName') }}</p>
          </a>
        </div>

        <div v-if="displayLanguageSelector == 'true'" class="flex-none lg:hidden mr-10">
          <LanguageSelector />
        </div>

        <!-- Sidebar Icon -->
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

        <!-- Navbar Items on Desktop -->
        <div class="flex-auto hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li v-if="displayHome == 'true'">
              <router-link to="/">{{ $t('projectRoutes.home') }}</router-link>
            </li>
            <li v-if="displayAbout == 'true'">
              <router-link to="/about">{{ $t('projectRoutes.about') }}</router-link>
            </li>
            <li v-if="displayPartner == 'true'">
              <router-link to="/partners">{{ $t('projectRoutes.partner') }}</router-link>
            </li>
            <li v-if="displayNews == 'true'">
              <router-link to="/news">{{ $t('projectRoutes.news') }}</router-link>
            </li>
            <li v-if="displayTraining == 'true'">
              <router-link to="/mapping">{{ $t('projectRoutes.training') }}</router-link>
            </li>
            <li v-if="displayResources == 'true'">
              <router-link to="/resources">{{ $t('projectRoutes.resources') }}</router-link>
            </li>
            <li v-if="displayContact == 'true'">
              <ContactUsForm />
            </li>
          </ul>
        </div>
        <div v-if="displayLanguageSelector == 'true'" class="flex-none hidden lg:block mr-10">
          <LanguageSelector />
        </div>
      </nav>

      <!-- Page content here -->
      <RouterView />
    </div>
    <nav class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>

      <!-- Sidebar content here -->
      <ul class="menu p-4 w-80 h-full bg-base-200">
        <!-- Project Logo or Name -->
        <header class="mb-5 pl-2">
          <a href="/">
            <img
              v-if="showImage == 'true'"
              src="@/assets/images/ProjectLogo.png"
              alt="Project Logo"
              style="max-height: 40px; width: auto"
            />
            <p v-if="showImage == 'false'">{{ $t('projectDetails.projectName') }}</p>
          </a>
        </header>

        <!-- Project Navigation -->
        <section>
          <li v-if="displayHome == 'true'">
            <router-link to="/">{{ $t('projectRoutes.home') }}</router-link>
          </li>
          <li v-if="displayAbout == 'true'">
            <router-link to="/about">{{ $t('projectRoutes.about') }}</router-link>
          </li>
          <li v-if="displayPartner == 'true'">
            <router-link to="/partners">{{ $t('projectRoutes.partner') }}</router-link>
          </li>
          <li v-if="displayNews == 'true'">
            <router-link to="/news">{{ $t('projectRoutes.news') }}</router-link>
          </li>
          <li v-if="displayTraining == 'true'">
            <router-link to="/mapping">{{ $t('projectRoutes.training') }}</router-link>
          </li>
          <li v-if="displayResources == 'true'">
            <router-link to="/resources">{{ $t('projectRoutes.resources') }}</router-link>
          </li>
          <li v-if="displayContact == 'true'">
            <ContactUsForm />
          </li>
        </section>
      </ul>
    </nav>
  </nav>
</template>

<script setup>
  import { ref, defineAsyncComponent } from 'vue';
  import { RouterLink, RouterView } from 'vue-router';
  import LanguageSelector from '@/components/Global/LanguageSelector.vue';

  const ContactUsForm = defineAsyncComponent(() => import('@/components/Global/ContactUsForm.vue'));

  import { useI18n } from 'vue-i18n';
  const { t } = useI18n();

  /* =====  Navbar Settings ===== */

  // Show Project Logo or Project Name
  const showImage = t('projectSettings.navbarSettings.displayLogo');
  // Display Links in Navbar
  const displayHome = t('projectSettings.navbarSettings.home');
  const displayAbout = t('projectSettings.navbarSettings.about');
  const displayPartner = t('projectSettings.navbarSettings.partner');
  const displayNews = t('projectSettings.navbarSettings.news');
  const displayTraining = t('projectSettings.navbarSettings.training');
  const displayResources = t('projectSettings.navbarSettings.resources');
  const displayContact = t('projectSettings.navbarSettings.contact');
  const displayLanguageSelector = t('projectSettings.navbarSettings.languageChanger');

  /* ===== modal script ===== */

  const modalActive = ref(null);

  const toggleModal = () => {
    modalActive.value = !modalActive.value;
    if (modalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
</script>
