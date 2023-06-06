<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost rounded-btn" for="">Change Language</label>
    <ul
      tabindex="0"
      class="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4 z-10"
    >
      <template v-for="language in languages">
        <li @click="setLanguage(language.code)">
          <a>
            <img :src="language.flag" class="w-6 h-6 object-contain mr-2" alt="Flag" />
            <span>{{ language.name }} </span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import norwegianFlag from '@/assets/flags/norwayFlag.png';
  import englishFlag from '@/assets/flags/englandFlag.png';

  // Languages to select from
  const languages = ref([
    {
      name: 'English',
      code: 'en',
      flag: englishFlag,
    },
    {
      name: 'Norsk',
      code: 'nb',
      flag: norwegianFlag,
    },
  ]);

  // Get Language from local storage
  const selectedLanguage = ref(localStorage.getItem('language') || 'en');

  // Set Language in local storage
  const setLanguage = (language) => {
    localStorage.setItem('locale', language);
    selectedLanguage.value = language;
    location.reload();
  };
</script>
