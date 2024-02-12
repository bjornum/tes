<template>
  <section class="bg-base-200 mt-auto text-black shadow-md">
    <footer class="footer footer-center p-10 container mx-auto px-4">
      <aside class="flex flex-col items-center">
        <div class="flex gap-4">
          <img
            class="mb-4"
            src="@/assets/images/newEuLogo.png"
            alt="Project Logo"
            style="max-height: 40px; width: auto"
          />
          <img
            class="mb-4"
            src="@/assets/images/ProjectLogo1.png"
            alt="Project Logo"
            style="max-height: 40px; width: auto"
          />
        </div>
        <p class="text-center mb-4">
          {{ $t('footer.disclaimer') }}
        </p>
        <p class="text-center mb-4">
          {{ $t('footer.disclaimerTwo') }}
        </p>
      </aside>
    </footer>
  </section>
</template>
