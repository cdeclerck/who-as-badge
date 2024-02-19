<!-- components/Header.vue -->
<template>
    <header>
      <h1>Qui a le badge ?</h1>
      <button @click="openModal">Changer de propriétaire</button>
      <Modal v-if="isModalOpen" @close="isModalOpen = false" />
    </header>
  </template>
  
  <script setup>
  import Modal from '~/components/ModalBadge.vue'
  import { ref } from 'vue'
  
  const isModalOpen = ref(false)
  
  const openModal = async () => {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    console.log(contents);
    isModalOpen.value = true
  }
  </script>
  
  <style scoped>
  /* Style spécifique au composant Header */
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #222;
  }
  
  button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  