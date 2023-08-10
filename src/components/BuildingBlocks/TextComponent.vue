<template>
  <div>
    <!-- Text component content -->

    aaaa
  </div>
</template>
<script setup>
  /*
    This is where the magic happens.
    You pass the value down into the card, and the card will adjust based on what you send in.
    Try to keep the props as simple as possible, and let the card do the heavy lifting.
    If something is called location in the card, call it location here.
    But if something is called name, think about giving it the key title for example if able.
      - This to make sure that the card is as reusable as possible.
  */
  const props = defineProps({
    width: Number,
  });
</script>
