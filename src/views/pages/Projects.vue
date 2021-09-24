<template>
    <div class="page">
        <Navbar v-bind:profile="profile" v-bind:projectsData="projectsData" />
        <ProjectsComponent v-bind:projectsData="projectsData" />
        <Footer v-bind:profile="profile" />
    </div>
</template>
<script>
    // COMPONENTS
    import Navbar from '../components/Navbar.vue'
    import ProjectsComponent from '../components/ProjectsComponent.vue'
    import Footer from '../components/Footer.vue'
    // DATA
    import Profile from '../../data/Profile.vue'
    import ProjectsData from '../../data/Projects.vue'
    export default {
        name: 'Projects',
        components: { Navbar, ProjectsComponent, Footer },
        data() {
            return {
                profile: Profile,
                projectsData: ProjectsData,
            }
        }
    }
</script>

