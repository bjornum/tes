<template>
  <section class="p-10">
    <h1>Products you can buy</h1>
    <template v-for="product in products" :key="product.id">
      <div class="card" style="border: solid hotpink 2px">
        <p class="text-center" style="font-size: 30px">{{ product.name }}</p>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.price }}</p>
        <button @click="addToCart(product)">Add to cart</button>
        <button @click="removeFromCart(product)">Remove from cart</button>
      </div>
    </template>
  </section>

  <section class="p-10" v-if="cart.length !== 0">
    <h1>Product Cart</h1>
    <button @click="clearCart">Remove ALL Products</button>
    <template v-for="cartProduct in cart">
      <div class="card" style="border: solid green 2px">
        <p class="text-center" style="font-size: 30px">{{ cartProduct.name }}</p>
        <p>Price: {{ cartProduct.price }}</p>
        <p>Amount Bought: {{ cartProduct.quantity }}</p>
        <pre>{{ cartProduct }}</pre>
        <button class="btn" @click="getProductInfo(cartProduct)">Get product info</button>
        <button class="btn" @click="removeFromCart(cartProduct)" v-if="cartProduct.quantity > 1">
          Remove one item cart
        </button>
        <button class="btn" @click="removeProductFromCart(cartProduct)">
          Remove product from cart
        </button>
      </div>
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
      quantity: 1,
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

  const cart = ref([]);

  /*
    Push product object to cart array in localStorage.
      - check if cart array exists in localStorage by id
  */
  const addToCart = (product) => {
    if (localStorage.getItem('cart')) {
      const cartArray = JSON.parse(localStorage.getItem('cart'));
      const productExists = cartArray.find((item) => item.id === product.id);
      if (productExists) {
        productExists.quantity++;
      } else {
        cartArray.push(product);
      }
      localStorage.setItem('cart', JSON.stringify(cartArray));
    } else {
      localStorage.setItem('cart', JSON.stringify([product]));
    }
    getCart();
  };

  // Remove product object from cart array in localStorage by id
  const removeFromCart = (product) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const productExists = cartArray.find((item) => item.id === product.id);
    if (productExists.quantity > 1) {
      productExists.quantity--;
    } else {
      const index = cartArray.indexOf(productExists);
      cartArray.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cartArray));
    getCart();
  };

  // Get cart array from localStorage
  const getCart = () => {
    if (localStorage.getItem('cart')) {
      cart.value = JSON.parse(localStorage.getItem('cart'));
    }
  };

  getCart();

  // See Product Information in Console log when clicking a product from localstorage
  const getProductInfo = (product) => {
    console.log(product);
  };

  // Remove product entry from localStorage by id even if quantity is more than 1
  const removeProductFromCart = (product) => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const productExists = cartArray.find((item) => item.id === product.id);
    const index = cartArray.indexOf(productExists);
    cartArray.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartArray));
    getCart();
  };

  // Remove cart from localstorage
  const clearCart = () => {
    localStorage.removeItem('cart');
    window.location.reload();
  };
</script>
