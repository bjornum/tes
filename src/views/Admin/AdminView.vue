<template>
  <main class="mt-[5%]">
    <p>Admina Pagae</p>
    <pre>{{ testing }}</pre>
    <input type="text" v-model="nameOfBook" />
    <form class="mt-6" @submit.prevent="pushBookData">
      <!-- Name of the Book -->
      <label for="nameofbook" class="block text-gray-700 font-bold mb-2">Name of book:</label>
      <input
        type="text"
        id="nameofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Name of Book"
        v-model="nameOfBook"
      />

      <!-- Author of the Book -->
      <label for="authorofbook" class="block text-gray-700 font-bold mb-2">Author of book:</label>
      <input
        type="text"
        id="authorofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Author of Book"
        v-model="nameOfAuthor"
      />

      <!-- Rating of the Book -->
      <label for="ratingofbook" class="block text-gray-700 font-bold mb-2">Rating of book:</label>
      <input
        type="text"
        id="ratingofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Rating of Book"
        v-model="ratingOfBook"
      />

      <!-- Pages of the Book -->
      <label for="pagesofbook" class="block text-gray-700 font-bold mb-2">Pages of book:</label>
      <input
        type="text"
        id="pagesofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Pages of Book"
        v-model="pagesOfBook"
      />

      <!-- Genres of the Book -->
      <label for="genresofbook" class="block text-gray-700 font-bold mb-2">Genres of book:</label>
      <input
        type="text"
        id="genresofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Genres of Book"
        v-model="genresOfBook"
      />

      <!-- Reviews of the Book -->
      <label for="reviewsofbook" class="block text-gray-700 font-bold mb-2">Reviews of book:</label>
      <input
        type="text"
        id="reviewsofbook"
        class="border border-gray-300 rounded-md p-2 w-1/5"
        placeholder="Reviews of Book"
        v-model="reviewsOfBook"
      />

      <!-- Submit Button -->
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </form>

    <pre>{{ bookData }}</pre>

    <button @click="pushBookData()">PUSH DA BOOK</button>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  const nameOfBook = ref('The Hobbit');
  const nameOfAuthor = ref('J.R.R. Tolkien');
  const ratingOfBook = ref(9);
  const pagesOfBook = ref(420);
  const genresOfBook = ref(['Fantasy', 'Adventure']);
  const reviewsOfBook = ref([
    {
      reviewer: 'Bjorn',
      rating: 9,
      review: 'This book is great!',
    },
    {
      reviewer: 'Bob',
      rating: 2,
      review: 'This book SUCKS!',
    },
  ]);

  const testing = ref('');

  // Object to Push Book Data
  const bookData = ref({
    title: nameOfBook,
    author: nameOfAuthor,
    rating: ratingOfBook,
    pages: pagesOfBook,
    genres: genresOfBook,
    reviews: reviewsOfBook,
  });

  // Push Book Data
  const pushBookData = async () => {
    try {
      const response = await axios.post(
        `https://complete-mongoserver-bjornum.onrender.com/books`,
        bookData.value
      );
      console.log(response.data);
      // newsData.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };
</script>
