<template>
    <footer class="footer">
      <div class="container">
        <Sidebar :clickShow="clickShow" v-bind:profile="this.profile" v-if="this.show"/>
        <span class="footer-text">Copyright 2021 - Hoping to see you again</span>
        <button class="contactButton" v-on:click="clickShow(true)">Contact me</button>
      </div>
    </footer>
</template>

<script>
    import Sidebar from './Sidebar.vue'
    export default {
        props: {
            profile: Object,
        },
        components: {
            Sidebar,
        },
        data: function () {
            return {
                show: false,
            }
        },
        methods: {
            clickShow: function (show){
                this.show = show;
            },
        },
        mounted() {
            console.log('Footer is loaded.')
        },
    }
</script>

<style scoped src="@/assets/css/Footer.css">
</style>