<template>
  <main class="mt-[5%] mx-auto w-[50%]">
    <p>{{ exerciseName }}</p>
    <!-- Name of the Exercise -->
    <div class="mb-4 mt-6">
      <label for="name" class="block text-gray-700 font-bold mb-2">Name:</label>
      <input
        type="text"
        id="nameOfExercise"
        class="border border-gray-300 rounded-md p-2 w-full"
        placeholder="Name of the Exercise"
        v-model="exerciseName"
      />
    </div>

    <!-- Description of Exercise -->
    <div class="mb-4">
      <label for="message" class="block text-gray-700 font-bold mb-2">Message:</label>
      <textarea
        id="descriptionOfExercise"
        class="border border-gray-300 rounded-md p-2 w-full"
        rows="4"
        placeholder="Description of the Exercise"
        v-model="exerciseDescription"
      ></textarea>
    </div>

    <!-- Muscle Group section -->
    <section class="mt-16">
      <label for="message" class="block text-gray-700 font-bold mb-2">Muscle Groups:</label>
      <div class="bg-neutral p-4">
        <div class="form-control w-full mb-6 font-Inter">
          <label for="emnenavn" class="label">
            <span class="label-text">Remember to have capital letter first</span>
          </label>
          <!-- Topic badges -->
          <div class="">
            <div class="flex flex-wrap gap-2">
              <template v-for="(tag, index) in musclegroupsToShowAsTags">
                <span class="badge mt-2 border-none badge-lg">
                  {{ tag.topic }}
                  <button class="ml-2 text-red-500" @click="removeTag(index)">x</button></span
                >
              </template>
            </div>
          </div>
          <div class="flex mt-4">
            <input
              id="musclegroup"
              type="text"
              placeholder="muscle group to add"
              v-model="muscleToAdd"
              class="input w-full lg:w-1/2 bg-neutral rounded-none input-bordered mt-4 mr-2"
              @keyup.enter="addTag(muscleToAdd)"
            />
            <button
              class="btn btn-primary text-white rounded-none block mt-4 normal-case font-Inter"
              @click="addTag(muscleToAdd)"
            >
              add muscle group
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment section -->
    <section class="mt-3">
      <label for="message" class="block text-gray-700 font-bold mb-2">Equipment:</label>
      <div class="bg-neutral p-4">
        <div class="form-control w-full mb-6 font-Inter">
          <label for="emnenavn" class="label">
            <span class="label-text">Remember to have capital letter first</span>
          </label>
          <!-- Topic badges -->
          <div class="">
            <div class="flex flex-wrap gap-2">
              <template v-for="(tag, index) in equipmentsToShowAsTags">
                <span class="badge mt-2 border-none badge-lg">
                  {{ tag.topic }}
                  <button class="ml-2 text-red-500" @click="removeEquipment(index)">x</button></span
                >
              </template>
            </div>
          </div>
          <div class="flex mt-4">
            <input
              id="equipment"
              type="text"
              placeholder="Equipment"
              v-model="equipmentToAdd"
              class="input w-full lg:w-1/2 bg-neutral rounded-none input-bordered mt-4 mr-2"
              @keyup.enter="addEquipmentToArray(equipmentToAdd)"
            />
            <button
              class="btn btn-primary text-white rounded-none block mt-4 normal-case font-Inter"
              @click="addEquipmentToArray(equipmentToAdd)"
            >
              add equipment
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Difficulty Level -->
    <section class="mt-3">
      <label for="message" class="block text-gray-700 font-bold mb-2">Difficulty Level:</label>
      <div class="bg-neutral p-4">
        <div class="form-control w-full mb-6 font-Inter">
          <label for="emnenavn" class="label">
            <span class="label-text">Remember to have capital letter first</span>
          </label>
          <div class="flex">
            <input
              id="equipment"
              type="text"
              placeholder="Difficulty Level"
              v-model="difficultyLevel"
              class="input w-full lg:w-1/2 bg-neutral rounded-none input-bordered mt-4 mr-2"
            />
          </div>
        </div>
      </div>
    </section>

    <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Submit
    </button>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  const exerciseName = ref('');
  const exerciseDescription = ref('');
  const muscleGroups = ref([]);
  const difficultyLevel = ref('');
  const equipment = ref([]);
  const steps = ref('');
  const tips = ref('');

  // Muscle Groups to add and display
  const muscleToAdd = ref('');
  const musclegroupsToShowAsTags = ref([]);

  // Equipment to add and display
  const equipmentToAdd = ref('');
  const equipmentsToShowAsTags = ref([]);

  /* ===== Muscle Group Functionalities ===== */

  // Remove muscle from array
  const removeTag = (index) => {
    musclegroupsToShowAsTags.value.splice(index, 1);
    muscleGroups.value.splice(index, 1);
  };

  // Add muscle to array
  const addTag = (newTag) => {
    if (!newTag) {
      // Need to include some content in the input field
    } else {
      musclegroupsToShowAsTags.value.push({ topic: newTag });
      muscleGroups.value.push(newTag);
      muscleToAdd.value = '';
    }
  };

  /* ===== Equipments Functionalities ===== */

  // Remove equipment from array
  const removeEquipment = (index) => {
    equipmentsToShowAsTags.value.splice(index, 1);
    equipment.value.splice(index, 1);
  };

  // Add Equipment to array
  const addEquipmentToArray = (newEquipment) => {
    if (!newEquipment) {
      // Need to include some content in the input field
    } else {
      equipmentsToShowAsTags.value.push({ topic: newEquipment });
      equipment.value.push(newEquipment);
      equipmentToAdd.value = '';
    }
  };

  /*
    Keys
    - name - String
    - description - String
    - musclegroups - Array with string values within
    - difficultyLevel - String
    - equipment - Array with string values within
    - steps - String with new line characters
    - tips - String with new line characters
  */
</script>
