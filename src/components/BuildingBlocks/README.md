# Building Block Components.

## Idea:

To have a a set of global, dynamic building blocks to utilise in the app.

## Component List.

1. GlobalModal.vue

[Test](./README.md)

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

Test
