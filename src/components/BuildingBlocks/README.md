# Building Block Components.

## Idea:

To have a a set of global, dynamic building blocks to utilise in the app.
Idea are to use 1 Global Component, and have it re-usable while fully customisable.

## Component List.

1. [GlobalModal.vue](https://github.com/Prios-Software-Websites/vue-3-template/tree/main/src/components/BuildingBlocks#01-globalmodalvue)
2. GlobalCard.vue

## 01. GlobalModal.vue

Utilising Teleport, its only feature are to be an working Modal, which one can import and use straight away.
Use it as a tag, and dump whatever content you wish to use within.

**How To:**

- Lag en ny component (eller bare importer og jobb i fila)

I template

```sh
<template>
  <a @click="toggleModal()">{{ $t('projectRoutes.contact') }}</a>
  <GlobalModal :modalActive="modalActive" @close-modal="toggleModal">
    <!-- CONTENT -->
  </GlobalModal>
</template>
```

In the Script

```sh
<script setup>
  import { ref } from 'vue';
  import GlobalModal from '@/components/BuildingBlocks/GlobalModal.vue';

  const modalActive = ref(null);

  const toggleModal = () => {
    modalActive.value = !modalActive.value;
    if (modalActive.value) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  };
</script>
```

## 02. GlobalCard.vue

An Generic Card, which accept multiple Props sent from the parent.
Use it as a singular tag, and pass in the values.
Make sure that they are written within the component, otherwise adjust it as such.
