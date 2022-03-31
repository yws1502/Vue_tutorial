<template>
    <div class="mask" @click="closeModal" v-show="this.$store.state.modalStore.isShow">
        <StudentForm v-if="mode === 'student'"></StudentForm>
        <SubjectForm v-else-if="mode === 'subject'"></SubjectForm>
    </div>
</template>

<script>
import StudentForm from "./form/StudentForm.vue";
import SubjectForm from "./form/SubjectForm.vue";


export default {
    methods: {
        closeModal() {
            this.$store.commit("setIsShow");
        }
    },
    components: {
        "StudentForm": StudentForm,
        "SubjectForm": SubjectForm
    },
    props: ["mode"]
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
