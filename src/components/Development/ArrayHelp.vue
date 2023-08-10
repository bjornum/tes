<template>
  <section class="container">
    <h1>Array Help</h1>

    <button @click="testEmit()">adasdqwdqwdwqdqd</button>
    <!-- <p>
      <strong>products:</strong>
      {{ totalPrice }}
    </p>
    <p>
      <strong>lastTwoProducts:</strong>
      {{ lastTwoProducts }}
    </p> -->
  </section>

  <section>
    <template v-for="product in OcheflicloneProducts">
      <p>{{ product.price.split('$')[0] * 10 }}</p>
      <!-- <p>{{ product.price * product.quantity }}</p> -->
    </template>
  </section>
</template>

<script setup>
  import { ref } from 'vue';

  const products = ref([
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 2,
      description: 'is best Product',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      quantity: 1,
      description: 'Was best Product',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      quantity: 1,
      description: 'What is even this Product',
    },
  ]);

  const OcheflicloneProducts = ref([
    {
      id: 1,
      name: 'Ochefliclone',
      description: 'The Wonder Product. Box of 30 pills.',
      img: '/ocheflatea.png',
      price: 99 + '$',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Mithralin+',
      description: 'Our wonderful silver solution.',
      img: '/mithralinplus.png',
      price: 109 + '$',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Ocheflatea',
      description: 'A modern take on the fabled Tea that inspired us.',
      img: '/ocheflatea.png',
      price: 39 + '$',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Ocheflacream',
      description: 'Our skin care revolution.',
      img: '/ointment.png',
      price: 49 + '$',
      quantity: 1,
    },
  ]);

  // run through OcheflicloneProducts array and multiply price with quantity
  const totalPrice = ref(
    OcheflicloneProducts.value.reduce((acc, curr) => {
      return acc + curr.price * curr.quantity;
    }, 0)
  );

  // Displays the last two products in the products array
  const lastTwoProducts = ref([...OcheflicloneProducts.value].reverse().slice(0, 2));

  const Test = defineEmits(['testing']);
  const SecretMessage = ref('Secret Message');

  const testEmit = () => {
    Test('testing', SecretMessage.value);
  };
</script>
