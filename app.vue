<template>
  <div>
    {{dataFile.user}}
    <input type="text" v-model="newOwner" required />
    <button type="submit" @click="changeContent">Enregistrer</button>
  </div>
  
</template>

<script setup>
import dataFile from './content/data.json'
import { Octokit } from "@octokit/rest"

// Créez une instance Octokit en utilisant votre token d'authentification
const octokit = new Octokit({
  auth: "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",
});
const data = ref('')
const newOwner = ref('')
let sha = null
const owner = "cdeclerck";
const repo = "who-as-badge";
const path = "content/data.json";

console.log(dataFile)
async function changeContent() {
  octokit.repos
  .getContent({
    owner,
    repo,
    path,
  })
  .then((response) => {
    const sha = response.data.sha

    // Envoyez la modification du fichier
    return octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: "Mise à jour du fichier via l'API GitHub",
      content: btoa({
        user: newOwner.value
      }),
      sha: sha, // Vous devez fournir le sha du fichier actuel
    });
  })
  .then((response) => {
    console.log("Fichier mis à jour avec succès :", response.data);
  })
  .catch((error) => {
    console.error("Erreur lors de la mise à jour du fichier :", error);
  });
}
</script>