<template>
    <div class="projects" id="projects">
        <button v-on:click="changeSlide(-1)">Previous</button>
        <div class="project_card" v-if="this.projectsArray[this.slide]">
            <h3 class="project_title">{{this.projectsArray[this.slide].title}}</h3>
            <a class="project_url" :href="this.projectsArray[this.slide].url" v-if="this.projectsArray[this.slide].url">See more...</a>
            <p class="project_url primary" v-else>This project will soon be available...</p>
            <div class="picture_container">
                <a target="_blank" :href="this.projectsArray[this.slide].pic" v-if="this.projectsArray[this.slide].pic">
                    <img class="project_picture"  :src="this.projectsArray[this.slide].pic" />
                </a>
                <img class="project_picture" v-else :src="this.projectsData.defaultPic" />
            </div>
            <p class="project_desc">{{this.projectsArray[this.slide].desc}}</p>
            <p class="count">{{this.slide + 1}} / {{ projectsArray.length}}</p>
            <div class="maxWidth720">
                <button v-on:click="changeSlide(-1)">Previous</button>
                <button v-on:click="changeSlide(1)">Next</button>
            </div>
        </div>
        <button v-on:click="changeSlide(1)">Next</button>
        
    </div>
</template>
    
<script>
    export default {
        name: 'projects',
        props: {
            projectsData: Object,
        },
        data: function () {
            return {
                slide: 0,
                projectsArray: this.projectsData.data
            }
        },
        methods: {
            changeSlide: function (e) {
                if(this.slide + e < 0)
                    this.slide = this.projectsArray.length - 1
                else if( this.slide + e >= this.projectsArray.length)
                    this.slide = 0
                else
                    this.slide += e
                console.log(this.projectsArray[this.slide])
            }
        },
        mounted() {
            console.log('Projects Page is loaded.')
        }
    }
</script>
<style scoped src="@/assets/css/Projects.css">

</style>