<template>
    <div class="sidebar" >
        <div class="sidebarTop">
            <button v-on:click="clickShow(false)" class="sidebarClose"><i class="far fa-window-close"></i></button>
            <h2 class="contactFormTitle">Contact</h2>
        </div>
        <div class="coordinateCard">
            <a :href="`mailto:${this.profile.email}`"><i class="fas fa-at"></i> {{this.profile.email}}</a>
            <a :href="`tel:${this.profile.phone}`"><i class="fas fa-phone"></i> {{this.profile.phone}}</a>
        </div>
        <form class="contactForm" @submit.prevent="sendEmail" v-if="!this.res">
            <label for="user_name">Your Name / Your Company</label>
            <input id="user_name" type="text" name="user_name" />
            <label for="user_email">Your email</label>
            <input id="user_email" type="email" name="user_email" />
            <label for="message">Your message to me</label>
            <textarea id="message" name="message"></textarea>
            <button><i class="fab fa-telegram-plane"></i></button>
        </form>
        <div v-else class="contactForm">
            <h3>Thank you for your message, I will try to answer it quickly!</h3>
        </div>
        <div class="sidebarBottom smoothButtons">
            <ul>
                <li v-on:click="clickShow(false)">
                    <button class="sidebarClose">CLOSE</button>
                    <span></span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import emailjs from 'emailjs-com';
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
            sendEmail: function(e) {
                emailjs.sendForm('service_6wuwpae', 'template_efwa4ru', e.target, 'user_7XiHEX24HZMuUJUdjIXjH')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text)
                    }, (error) => {
                        console.log('FAILED...', error)
                    })
                emailjs.sendForm('service_6wuwpae', 'template_s44z4w8', e.target, 'user_7XiHEX24HZMuUJUdjIXjH')
                    .then((result) => {
                        console.log('SUCCESS!', result.status, result.text)
                    }, (error) => {
                        console.log('FAILED...', error)
                    })
                this.res = true
            },
        },
        mounted() {
            console.log('Sidebar is loaded.')
        },
    }
</script>

<style scoped src="@/assets/css/components/Sidebar.css">
</style>