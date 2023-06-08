<template>
  <div class="card w-full bg-neutral rounded-none text-grayText shadow-md">
    <!-- Image -->
    <figure class="w-full h-40">
      <img :src="image" alt="Shoes" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body bg-neutral">
      <h2 class="card-title font-EB">{{ title }}</h2>
      <p class="font-Inter" :class="[!hasMoreDetails ? 'mb-6' : '']">{{ description }}</p>
      <p class="font-Inter" v-if="email">{{ email }}</p>
      <p class="font-Inter" v-if="phonenumber">{{ phonenumber }}</p>
      <div class="flex font-Inter">
        <div :class="[hasCountSinceUrl ? 'mt-4' : '']">
          <p class="text-xs" v-if="partnerName">{{ partnerName }}</p>
          <p class="text-xs" v-if="location">{{ location }}</p>
          <p v-if="videoCount">{{ videoCount }} Videoer</p>
          <p v-if="partnerSince">Partner siden {{ partnerSince }}</p>
          <p v-if="websiteUrl">{{ websiteUrl }}</p>
        </div>
      </div>
    </div>
    <div
      v-if="badgeText"
      :class="[
        badgeText === 'Medlem'
          ? 'bg-secondary'
          : badgeText === 'Gratis teaser'
          ? 'bg-accent'
          : badgeText === 'Direktesending'
          ? 'bg-primaryLight'
          : '',
        badgeText === 'Medlem' ? 'text-white' : 'text-[#121212]',
      ]"
      class="badge badge-accent absolute top-2 left-2 font-Inter border-none"
    >
      {{ badgeText }}
    </div>
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
    title: String,
    description: String,
    partnerName: String,
    location: String,
    image: String,
    badgeText: String,
    email: String,
    phonenumber: String,
    videoCount: String,
    partnerSince: String,
    websiteUrl: String,
    showCardButton: {
      type: Boolean,
      default: false,
    },
    showCardArrow: {
      type: Boolean,
      default: false,
    },
  });

  // Example if needing to run more functionalities here.
  const hasMoreDetails = !!props.email || !!props.phonenumber;
  const hasCountSinceUrl = !!props.videoCount || !!props.partnerSince || !!props.websiteUrl;
</script>
