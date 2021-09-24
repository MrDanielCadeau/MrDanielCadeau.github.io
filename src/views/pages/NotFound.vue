<template>
    <div class="page">
        <Navbar v-bind:profile="profile" v-bind:projectsData="projectsData" />
        <div class="notFound">
            <h2>404</h2>
            <p>Page not found, <a href="/">go to the home page.</a></p>
        </div>
        <Footer v-bind:profile="profile" />
    </div>
</template>
<script>
// COMPONENTS
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
// DATA
import Profile from '../../data/Profile.vue'
import ProjectsData from '../../data/Projects.vue'
export default {
  components: { Navbar, Footer },
  name: 'NotFound',
  data() {
    return {
          profile: Profile,
          projectsData: ProjectsData,
    }
  }
}
</script>
<style scoped src="@/assets/css/NotFound.css">
</style>