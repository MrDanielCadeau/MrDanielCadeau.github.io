<template>
    <div class="sidebar" >
        <div class="sidebarBottom smoothButtons">
            <ul>
                <li v-on:click="clickShow(false)">
                    <button class="sidebarClose">CLOSE</button>
                    <span></span>
                </li>
            </ul>
        </div>
        <div class="coordinateCard">
            <a :href="`mailto:${this.profile.email}`"><i class="fas fa-at"></i> {{this.profile.email}}</a>
            <a :href="`tel:${this.profile.phone}`"><i class="fas fa-phone"></i> {{this.profile.phone}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            profile: Object,
            clickShow: { type: Function },
        },
        data: function(){
            return{
                res: false,
            }
        },
        methods: {
        },
        mounted() {
            console.log('Sidebar is loaded.')
        },
    }
</script>

<style scoped src="@/assets/css/Sidebar.css">
</style>