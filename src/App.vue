<template>
  <main>
    <BoutonNotif @colorGenerated="handleColorGenerated" />
    <div class="notifications-container">
      <BaseNotification v-for="notification in notifications" :key="notification.id" :color="notification.color" />
    </div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useNotificationStore } from './store/notifications'
import BaseNotification from "./components/BaseNotification.vue"
import BoutonNotif from "./components/BoutonNotif.vue"

const notificationStore = useNotificationStore()
const notifications = notificationStore.notifications

const handleColorGenerated = (color) => {
  const id = Date.now() // Utiliser un identifiant unique pour chaque notification
  notificationStore.createNotification({ id, color })
  console.log(color)
  console.log(notifications)

  // Vérification que la dernière valeur ajoutée correspond bien à la couleur générée
  const lastNotification = notifications[notifications.length - 1]
  if (lastNotification.color === color) {
    console.log('La couleur correspond bien:', color)
  } else {
    console.error('Erreur: La couleur ne correspond pas:', color, '!=', lastNotification.color)
  }
}

onMounted(() => {
  console.log(notificationStore.getNotifications())
})
</script>

<style scoped>
.notifications-container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
}

.notifications-container > * {
  margin-bottom: 10px;
}
</style>
