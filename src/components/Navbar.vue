<template>
    <div id="Navbar">
        <div>
            <a href="/"><h1>{{ this.profile.fullname }}'s Portfolio</h1></a>
        </div>
        <nav class="links">
            <ul>
                <li v-for="link in this.profile.links" :key="link.title">
                    <a :href="link.url" target="_blank" rel="noopener noreferrer">{{link.title}}</a>
                </li>
            </ul>
        </nav>
        <nav class="projects">
            <ul class="dropdown_ul">
                <li class="dropdown">
                    <a href="#projects">Projects <i class="fas fa-sort-down"></i></a>
                    <ul class="drop">
                        <li v-for="project in this.projectsData.data" :key="project.title">
                            <a :href="project.url" v-if="project.url" target="_blank" rel="noopener noreferrer">{{project.title}}</a>
                            <a class="deactivate" v-else>{{project.title}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        props: {
            profile: Object,
            projectsData: Object,
        },
        mounted() {
            console.log('Navbar is loaded.')
        }
    }
</script>

<style scoped src="@/assets/css/Navbar.css">
</style>
