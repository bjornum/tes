<template>
  <div class="card w-full bg-neutral rounded-none text-grayText shadow-md">
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
        <!-- <div :class="[hasCaptions ? 'ml-auto' : '']" v-if="showCardButton">
          <button class="btn btn-secondary rounded-none text-white normal-case">Se nå</button>
        </div> -->
        <div :class="[hasCountSinceUrl ? 'ml-auto mt-auto' : '']" class="mt-2" v-if="showCardArrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clip-rule="evenodd"
            />
          </svg>
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

  const hasCaptions = !!props.partnerName || !!props.location;
  const hasMoreDetails = !!props.email || !!props.phonenumber;
  const hasCountSinceUrl = !!props.videoCount || !!props.partnerSince || !!props.websiteUrl;
</script>
