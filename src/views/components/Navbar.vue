<template>
    <div id="Navbar">
        <div>
            <a href="/"><h1>{{ this.profile.fullname }}'s Portfolio</h1></a>
        </div>
        <nav class="links">
            <ul>
                <li v-for="link in this.profile.links" :key="link.title">
                    <a :href="link.url">{{link.title}}</a>
                </li>
            </ul>
        </nav>
        <nav class="projects">
            <ul class="dropdown_ul">
                <li class="dropdown">
                    <a href="/projects">Projects <i class="fas fa-sort-down"></i></a>
                    <ul class="drop">
                        <li v-for="project in this.projects.data" :key="project.title">
                            <a :href="project.url">{{project.title}}</a>
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
            projects: Object,
        },
        mounted() {
            console.log('Navbar is loaded.')
        }
    }
</script>

<style scoped src="@/assets/css/components/Navbar.css">
</style>
