<template>
  <div id="app">
    <Navbar v-bind:profile="profile" v-bind:projects="projectsData" />
    <!-- remplacer ces deux lignes en dessous par un component page, dans lequel instaurer -->
    <Home v-bind:profile="profile" />
    <Projects /> 
    <!-- le routeur fait maison, en fonction du pathname dans l'url -->
    <Footer v-bind:profile="profile" />
  </div>
</template>

<script>
//PAGES
import Home from './views/pages/Home.vue'
import Projects from './views/pages/Projects.vue'
import NotFound from './views/pages/NotFound.vue'
// COMPONENTS
import Navbar from './views/components/Navbar.vue'
import Footer from './views/components/Footer.vue'
// DATA
import Profile from './data/Profile.vue'
import ProjectsData from './data/Projects.vue'

const routes = {
  '/' : Home,
  '/projects' : Projects
}

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
    Projects,
    Footer,
  },
  data() {
    return {
      currentRoute: window.location.pathname,
      profile: Profile,
      projectsData: ProjectsData,
    }
  },
  render(h){
    return h(routes[this.currentRoute] || NotFound)
    // A DEPLACER AUSSI [cf l.4-7]
  }
}
</script>

<style src="@/assets/css/App.css">
</style>
