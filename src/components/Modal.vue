<template>
    <div class="mask" v-show="this.$store.state.modalStore.isShow">
        <StudentForm></StudentForm>
    </div>
</template>

<script>
import StudentForm from "./form/StudentForm.vue";


export default {
    components: {
        "StudentForm": StudentForm,
    }
}

</script>

<style scoped>
.mask {
    position: fixed;
    top: 0; bottom: 0;
    left: 0; right: 0;
    background-color: rgba(0,0,0,0.6);
}
</style>
