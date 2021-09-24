<template>
  <div class="page">
    <Navbar v-bind:profile="profile" v-bind:projectsData="projectsData" />
    <HomeComponent v-bind:profile="profile" />
    <Footer v-bind:profile="profile" />
  </div>
</template>

<script>
// COMPONENTS
import Navbar from '../components/Navbar.vue'
import HomeComponent from '../components/HomeComponent.vue'
import Footer from '../components/Footer.vue'
// DATA
import Profile from '../../data/Profile.vue'
import ProjectsData from '../../data/Projects.vue'
export default {
  components: { Navbar, HomeComponent, Footer },
  name: 'Home',
  data() {
    return {
          profile: Profile,
          projectsData: ProjectsData,
    }
  }
}
</script>

<style src="@/assets/css/App.css">
</style>