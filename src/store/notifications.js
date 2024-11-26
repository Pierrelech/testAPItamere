import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref([])

  const createNotification = (notification) => {
    notifications.value.push(notification)
    if (notifications.value.length > 5) {
      notifications.value.shift()
    }
  }

  const removeNotification = (id) => {
    notifications.value = notifications.value.filter(notif => notif.id !== id)
  }

  const getNotifications = () => notifications.value

  const getNotificationById = (id) => notifications.value.find(notif => notif.id === id)

  return {
    notifications,
    createNotification,
    removeNotification,
    getNotifications,
    getNotificationById,
  }
})
