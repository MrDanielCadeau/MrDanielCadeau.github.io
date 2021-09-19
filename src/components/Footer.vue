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

<style scoped>
.footer .container{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 75px;
}
.contactButton{
    background-color: var(--bg-color);
    border: 1px solid var(--primary-color);
    color: var(--text-color);
    font-size: 1.4em;
    padding: 5px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 25px;
}
.contactButton:hover{
    background-color: var(--primary-color);
    color: var(--text-color-alt);
}
.footer-text{
    color: var(--footer-text-color);
}
</style>