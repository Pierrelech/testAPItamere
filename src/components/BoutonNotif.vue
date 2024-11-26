<template>
  <button @click="creeRandomColor">Générer une notif</button>
</template>

<script setup>

// Définir l'événement à émettre
const cree = defineEmits(['colorGenerated']);

// Fonction pour générer une couleur aléatoire
const creeRandomColor = () => {
  const colors = ['rouge', 'vert', 'bleu', 'jaune'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cree('colorGenerated', randomColor);
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>