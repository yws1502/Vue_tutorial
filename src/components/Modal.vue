<template>
    <div class="mask" @click.self="closeModal" v-if="isShow">
        <component :is="formMode"></component>
    </div>
</template>

<script>
import StudentForm from "./form/StudentForm.vue";
import SubjectForm from "./form/SubjectForm.vue";
import ProfessorForm from "./form/ProfessorForm.vue";
import BoardForm from "./form/BoardForm.vue";
import { mapState } from "vuex";

export default {
    methods: {
        closeModal(e) {
            this.$store.commit("modalStore/setIsShow");
            this.$store.commit("subjectStore/clearSelectedSubject");
            this.$store.commit("professorStore/clearSelectedProfessor");
            this.$store.commit("studentStore/clearSelectedStudent");
        }
    },
    components: {
        StudentForm,
        SubjectForm,
        ProfessorForm,
        BoardForm,
    },
    computed: {
        ...mapState("modalStore", ["isShow","formMode"])
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
