<!-- components/Modal.vue -->
<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h2>Changer de propriétaire du badge</h2>
        <form @submit.prevent="handleSubmit">
          <label>Nouveau propriétaire :</label>
          <input type="text" v-model="newOwner" required />
          <button type="submit">Enregistrer</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  const newOwner = ref('')
  
  const handleSubmit = async () => {
    closeModal()
  }
  
  const closeModal = () => {
    newOwner.value = ''
    $emit('close')
  }
  </script>
  
  <style scoped>
  /* Style spécifique au composant Modal */
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  
  .modal-content {
    background-color: #333;
    padding: 20px;
    border-radius: 10px;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
  }
  </style>
  