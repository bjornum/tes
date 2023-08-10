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

  <section>
    <button class="btn" @click="buyProducts()">BUY NOW</button>
  </section>

  <section class="p-10">
    <h1>Arkiv</h1>
    <template v-for="archivedproduct in archivedProducts" :key="archivedproduct.id">
      <div class="card" style="border: solid hotpink 2px">
        <p class="text-center" style="font-size: 30px">{{ archivedproduct.name }}</p>
        <p>Price: {{ archivedproduct.price }}</p>
        <p>Description: {{ archivedproduct.price }}</p>
        <pre>{{ archivedproduct }}</pre>
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

  // Buy all products in cart, push these into archive array in localStorage with current date and time and remove cart from localStorage
  const buyProducts = () => {
    const cartArray = JSON.parse(localStorage.getItem('cart'));
    const archiveArray = JSON.parse(localStorage.getItem('archive'));
    const date = new Date();
    // get current date and time and format it
    const dateAndTime = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // create object to push into archive array
    const archiveObject = {
      date: dateAndTime,
      products: cartArray,
    };
    // check if archive array exists in localStorage
    if (localStorage.getItem('archive')) {
      archiveArray.push(archiveObject);
      localStorage.setItem('archive', JSON.stringify(archiveArray));
    } else {
      localStorage.setItem('archive', JSON.stringify([archiveObject]));
    }
    // remove cart from localStorage
    localStorage.removeItem('cart');
    // reload page (can run a trigger instead if wanting to, just call for the getArchivedProducts function)
    window.location.reload();
  };

  // Will contain all Archived entries from localstorage archive
  const archivedProducts = ref([]);

  // Get archive array from localStorage and place into archivedProducts array
  const getArchivedProducts = () => {
    if (localStorage.getItem('archive')) {
      archivedProducts.value = JSON.parse(localStorage.getItem('archive'));
    }
  };

  // Run the Function afterward to get ALL archived products
  getArchivedProducts();
</script>
