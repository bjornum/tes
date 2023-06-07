<template>
  <a @click="toggleModal()">{{ $t('projectRoutes.contact') }}</a>
  <GlobalModal :modalActive="modalActive" @close-modal="toggleModal">
    <div class="text-black p-2">
      <h1 class="text-2xl font-semibold">Contact Us</h1>

      <form class="mt-6">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
          <input
            type="text"
            id="name"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Full Name"
          />
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Email"
          />
        </div>

        <div class="mb-4">
          <label for="subject" class="block text-gray-700 font-bold mb-2">Subject:</label>
          <input
            type="message"
            id="subject"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Subject"
          />
        </div>

        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2">Message:</label>
          <textarea
            id="message"
            class="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            placeholder="Message"
          ></textarea>
        </div>

        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  </GlobalModal>
</template>

<script setup>
  import { ref } from 'vue';
  import GlobalModal from '@/components/BuildingBlocks/GlobalModal.vue';

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
