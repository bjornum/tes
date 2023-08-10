<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div
        v-show="modalActive"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        style="overflow: auto"
      >
        <Transition name="modal-inner">
          <!-- If type of modal are image, then full screen of it -->
          <div
            class="relative p-4 rounded-lg my-auto pt-10"
            style="background-color: #2f2f2f"
            :class="typeOfModal === 'image' ? 'w-[100%] md:w-[75%]' : 'w-[100%] md:w-[50%]'"
          >
            <button
              class="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              @click="$emit('close-modal')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <slot />
            <button
              class="text-white mt-8 bg-weather-primary py-2 px-6"
              @click="$emit('close-modal')"
            >
              Close
            </button>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import { ref, watch } from 'vue';

  defineEmits(['close-modal']);
  defineProps({
    modalActive: {
      type: Boolean,
      default: false,
    },
    typeOfModal: {
      type: String,
      default: 'default',
    },
  });
</script>
