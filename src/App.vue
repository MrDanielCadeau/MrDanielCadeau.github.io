<template>
  <div class="page">
    <Navbar v-bind:profile="profile" v-bind:projectsData="projectsData" />
    <Home v-bind:profile="profile" />
    <Projects v-bind:projectsData="projectsData" />
    <Footer v-bind:profile="profile" />
  </div>
</template>

<script>
// COMPONENTS
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
// DATA
import Profile from './data/Profile.vue'
import ProjectsData from './data/Projects.vue'
export default {
  components: { Navbar, Home, Projects, Footer },
  name: 'App',
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