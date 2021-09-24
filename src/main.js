import Vue from 'vue'
// PAGES
import Home from './views/pages/Home.vue'
import Projects from './views/pages/Projects.vue'
import NotFound from './views/pages/NotFound.vue'

Vue.config.productionTip = false

const routes = {
  '/': Home,
  '/projects': Projects
}

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
