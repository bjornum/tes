<template>
  <main class="mt-[5%]">
    <h1 className="text-3xl font-bold underline">
      <p>{{ pageTitle }}</p>
    </h1>
    <p>ajasdads</p>
    <pre>{{ newsData }}</pre>
    <p>asd</p>

    <div>
      <button @click="startTextToSpeech('Hallo, mitt navn er Bobby bob')">
        Start Text to Speech
      </button>
      <br />

      <button @click="stopTextToSpeech()">Stop Talking</button>
    </div>
  </main>
</template>

<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { SpeechConfig, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';

  const pageTitle = ref('Resources');
  const newsData = ref([]);

  // Get all news
  const myTest = async () => {
    try {
      const response = await axios.get(
        `https://complete-mongoserver-bjornum.onrender.com/books?page=0`
      );
      console.log(response.data);
      newsData.value = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // myTest();

  const speechKey = '3765b3fd3dfa481fb817e61db215fe96';
  const speechRegion = 'northeurope';

  let synthesizer; // Declare the synthesizer variable outside the function

  const startTextToSpeech = () => {
    let inputText = 'Hei, bob bobby bobbensen bobbi bobba boob babbo bob, Heisann bob bobbi bob';
    console.log('test');

    // Adjust the timeout duration as needed (in milliseconds)
    const delayDuration = 500; // For example, a 500ms delay

    setTimeout(() => {
      const speechConfig = SpeechConfig.fromSubscription(speechKey, speechRegion);
      speechConfig.speechSynthesisLanguage = 'nb-NO';

      synthesizer = new SpeechSynthesizer(speechConfig);
      synthesizer.speakTextAsync(inputText);
    }, delayDuration);
  };

  const stopTextToSpeech = () => {
    if (synthesizer) {
      synthesizer.pause(); // Pause the speech synthesis
      synthesizer.close(); // Close the SpeechSynthesizer instance
    }
  };
</script>
