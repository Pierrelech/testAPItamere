<template>
	<main v-if="isVisible">
        <div :class="notificationClass">
            <div class="modal-header">
                <img v-if = "props.color=== 'rouge'" src="../../icons/Danger.svg" alt="Danger Icon" />
                <img v-if = "props.color=== 'vert'"src="../../icons/CheckCircle.svg" alt="Success Icon" />
                <img v-if = "props.color=== 'jaune'"src="../../icons/Warning.svg" alt="Warning Icon" />
                <img v-if = "props.color=== 'bleu'"src="../../icons/Info.svg" alt="Info Icon" />
                <h1>Modal Windows</h1>
                <button class="close-button" @click="closeNotification">&times;</button>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
        </div>
	</main>
</template>

<script setup>
import { ref, computed } from 'vue';

// prop pour accepter l'entrée
const props = defineProps({
    color: {
        type: String,
        required: true,
        validator: value => ['rouge', 'vert',"jaune","bleu"].includes(value)
    }
});

//propriété réactive pour la visibilité
const isVisible = ref(true);

// fonction pour fermer la notification
const closeNotification = () => {
    isVisible.value = false;
};


//classe dynamique en fonction de la valeur de la prop
const notificationClass = computed(() => {
    if (props.color === 'rouge') {
        return 'notification danger';
    } else if (props.color === 'jaune') {
        return 'notification warning';
    } else if (props.color === 'vert') {
        return 'notification success';
    }
    else if (props.color === 'bleu') {
        return 'notification info';
    }
});


</script>

<style scoped>
.danger {
    width: 527px; 
    height: 160px; 
    top: 32px;
    left: 16px;
    padding: 24px;
    gap: 8px;
    border-radius: 16px;
    border: 2px solid #D29393; 
    opacity: 1; 
    background: #F7E4E4;
    box-shadow: 0px 6px 12px 0px #0000001A;
}

.warning{
    width: Hug (527px)px;
    height: Hug (160px)px;
    top: 420px;
    left: 16px;
    padding: 24px;
    gap: 8px;
    border-radius: 16px;
    border: 1px 0px 0px 0px;
    opacity: 0px;

    background: #F7F2E4;
    border: 1px solid #D4C296;
    box-shadow: 0px 6px 12px 0px #0000001A;



}

.success{
    width: Hug (527px)px;
    height: Hug (160px)px;
    top: 226px;
    left: 16px;
    padding: 24px;
    gap: 8px;
    border-radius: 16px 16px 16px 16px;
    border: 2px 0px 0px 0px;
    opacity: 0px;
    background: #E4F7E8;
    border: 2px solid #89B291;
    box-shadow: 0px 6px 12px 0px #0000001A;
}

.info{
    width: Hug (527px)px;
    height: Hug (160px)px;
    top: 614px;
    left: 16px;
    padding: 24px;
    gap: 8px;
    border-radius: 16px;
    border: 2px 0px 0px 0px;
    opacity: 0px;
    background: #E4E9F7;
    border: 2px solid #96A8D8;
    box-shadow: 0px 6px 12px 0px #0000001A;

}

.modal-header {
    display: flex; 
    align-items: center; 
    width: 479px; 
    height: 32px; 
    gap: 16px;
    opacity: 1; 
}

h1 {
    width: 395px;
    height: 28px;
    gap: 0px;
    opacity: 1; 
    font-family: DM Sans;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
}
.close-button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
}

p {
    width: 479px; 
    height: 72px; 
    padding: 0px 0px 0px 48px;
    gap: 0px;
    opacity: 1; 
}
</style>
