<template>
  <main class="container mx-auto mt-10 mb-14">
    <section>
      <!-- Page title -->
      <div class="text-2xl flex justify-center xl:justify-start mb-10">
        <h1
          class="text-4xl inline-block after:absolute after:block after:h-1 after:bg-secondary after:w-[3ch]"
        >
          {{ $t('contactPage.pageTitle') }}
        </h1>
      </div>
    </section>
    <section class="mb-4">
      <div v-if="successMessage" class="text-green-500 text-2xl">{{ successMessage }}</div>
      <div v-if="errorMessage" class="text-red-500 text-2xl">{{ errorMessage }}</div>
    </section>
    <section class="container mx-auto px-4 max-w-xl">
      <div class="text-black p-2">
        <!-- <form class="mt-6"> -->
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2"
            >{{ $t('contactPage.contactName') }}:</label
          >
          <input
            type="text"
            id="name"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Full Name"
            v-model="nameOfSender"
          />
          <div v-if="nameError" class="text-red-500 text-sm">{{ nameError }}</div>
        </div>

        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">
            {{ $t('contactPage.contactEmail') }}:
          </label>
          <input
            type="email"
            id="email"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Email"
            v-model="emailOfSender"
          />
          <div v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</div>
        </div>

        <div class="mb-4">
          <label for="subject" class="block text-gray-700 font-bold mb-2"
            >{{ $t('contactPage.contactSubject') }}:</label
          >
          <input
            type="message"
            id="subject"
            class="border border-gray-300 rounded-md p-2 w-full"
            placeholder="Subject"
            v-model="subjectOfSender"
          />
          <div v-if="subjectError" class="text-red-500 text-sm">{{ subjectError }}</div>
        </div>

        <div class="mb-4">
          <label for="message" class="block text-gray-700 font-bold mb-2"
            >{{ $t('contactPage.contactMessage') }}:</label
          >
          <textarea
            id="message"
            class="border border-gray-300 rounded-md p-2 w-full"
            rows="4"
            placeholder="Message"
            v-model="messageOfSender"
          ></textarea>
          <div v-if="messageError" class="text-red-500 text-sm">{{ messageError }}</div>
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          @click="checkIfContactFormIsValid()"
        >
          {{ $t('contactPage.submitButton') }}
        </button>
        <!-- </form> -->
      </div>
    </section>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';

  // Connect to the Form Inputs
  const nameOfSender = ref('');
  const emailOfSender = ref('');
  const subjectOfSender = ref('');
  const messageOfSender = ref('');
  const pageSentFrom = ref('Vue 3 Template'); // Fill the name of the project this contact lies within.

  // Connect to the Form Errors
  const nameError = ref('');
  const emailError = ref('');
  const subjectError = ref('');
  const messageError = ref('');

  const successMessage = ref('');
  const errorMessage = ref('');

  // Rules to check if the contact form is valid or not
  const checkIfContactFormIsValid = () => {
    // Check if NAME is valid
    if (nameOfSender.value.length < 3) {
      nameError.value = 'Name must be at least 3 characters long';
    } else {
      nameError.value = '';
    }
    // Check if EMAIL is valid
    if (emailOfSender.value.length < 3) {
      console.log('Email is not valid');
      emailError.value = 'Email must be at least 3 characters long';
    } else {
      console.log('Email is valid');
      emailError.value = '';
    }
    // Check if SUBJECT is valid
    if (subjectOfSender.value.length < 3) {
      console.log('Subject is not valid');
      subjectError.value = 'Subject must be at least 3 characters long';
    } else {
      console.log('Subject is valid');
      subjectError.value = '';
    }
    // Check if MESSAGE is valid
    if (messageOfSender.value.length < 3) {
      console.log('Message is not valid');
      messageError.value = 'Message must be at least 3 characters long';
    } else {
      console.log('Message is valid');
      messageError.value = '';
    }
    // Check if the contact form is valid
    if (
      nameError.value === '' &&
      emailError.value === '' &&
      subjectError.value === '' &&
      messageError.value === ''
    ) {
      displayContactFormSuccess();
      sendContactFormToDatabase();
    } else {
      displayContactFormError();
    }
  };

  // Send the contact form to the Database - It works but code been disabled while working on it.
  const sendContactFormToDatabase = async () => {
    console.log('Contact form are being sent to the database');
    const contactForm = {
      name: nameOfSender.value,
      email: emailOfSender.value,
      subject: subjectOfSender.value,
      message: messageOfSender.value,
      sentFrom: pageSentFrom.value,
    };
    console.log('Contactform', contactForm);
    try {
      const response = await axios.post(`crm/contactform/prios`, contactForm);
      console.log('Response', response);
      resetAllInputFields();
    } catch (error) {
      console.error(error);
    }
  };

  // Reset the contact form inputs
  const resetAllInputFields = () => {
    nameOfSender.value = '';
    emailOfSender.value = '';
    subjectOfSender.value = '';
    messageOfSender.value = '';
  };

  // Display the contact form error
  const displayContactFormError = () => {
    // Display the contact form error
    // If submission fails
    errorMessage.value = 'An error occurred while submitting the form.';
    successMessage.value = ''; // Clear any previous success message
    console.log('Contact form is not valid');

    // Clear the success message after 5 seconds
    setTimeout(() => {
      errorMessage.value = '';
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  // Display the contact form success
  const displayContactFormSuccess = () => {
    // If submission is successful
    successMessage.value = 'Form submitted successfully!';
    errorMessage.value = ''; // Clear any previous error message

    // Clear the success message after 5 seconds
    setTimeout(() => {
      successMessage.value = '';
    }, 5000); // 5000 milliseconds = 5 seconds
  };
</script>
