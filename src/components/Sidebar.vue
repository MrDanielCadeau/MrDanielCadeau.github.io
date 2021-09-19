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

<style scoped>
.sidebar{
    background-color: var(--sidebar-bg);
    z-index: 1000000;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: -5px 0px 10px var(--sidebar-bg);
    animation: fadeIn 1.5s forwards;
}
.sidebar > .sidebarTop{
    margin-top: 15px;
    width: 80%;
    display: flex;
    justify-content: space-around;
}
.sidebar > .sidebarTop > .contactFormTitle{
    font-size: 2.5em;
    font-weight: 500;
    color: var(--text-color-alt);
}
.sidebar > .sidebarTop > .sidebarClose{
    border: none;
    background-color: transparent;
    font-size: 2.5em;
    font-weight: 500;
    cursor: pointer;
}
.sidebar > .sidebarTop > .sidebarClose > i{
    color: var(--text-color-alt);
}
.sidebar > .sidebarTop > .sidebarClose:hover > i{
    color: var(--text-color);
}
.sidebar > .sidebarTop > .sidebarClose:active > i{
    opacity: 0.7;
}
/* coordinateCard */
.sidebar > .coordinateCard{
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 25px;
}
.sidebar > .coordinateCard > a{
    margin-top: 15px;
    text-align: left;
    font-size: 1.3em;
    color: var(--text-color-alt);
}
.sidebar > .coordinateCard > a:hover{
    color: var(--secondary-color);
}
/* form */
.sidebar > .contactForm{
    display: flex;
    height: 75%;
    width: 80%;
    margin: auto;
    flex-direction: column;
    border-top: 0.5px solid var(--bg-color);
}
.sidebar > .contactForm > h3{
   margin: auto;
   font-size: 1.5em;
   line-height: 1.2em;
}
.sidebar > .contactForm > label{
    text-align: left;
    font-size: 1.2em;
    color: var(--text-color-alt);
    padding-top: 15px;
    padding-bottom: 5px;
}
.sidebar > .contactForm > input[type="text"], .sidebar > .contactForm > input[type="email"]{
    border: none;
    font-size: 1.3em;
    padding: 10px 0px;
    text-indent: 15px;
}
.sidebar > .contactForm > textarea{
    resize: none;
    border: none;
    height: 40%;
    font-size: 1.3em;
    text-indent: 5px;
    padding-top: 5px;
}
.sidebar > .contactForm > button{
    margin-top: 10px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 4em;
    border-bottom: 0.5px solid var(--bg-color);
}
.sidebar > .contactForm > button > i{
    color: var(--text-color-alt);
}
.sidebar > .contactForm > button:hover > i{
    color: var(--secondary-color);
}
.sidebar > .contactForm > button:active > i{
    opacity: 0.7;
}
/* smoothButtons at bottom */
.sidebarBottom ul{
    display: flex;
    justify-content: space-around;
}
.sidebarBottom ul li {
    color: var(--primary-color);
    background-color: var(--bg-color);
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 15px 0px;
    z-index: 1;
    transition: 0.2s;
    cursor: pointer;
    box-shadow: -5px 0px 5px var(--bg-color);
}
.smoothButtons ul li button {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1.5em;
}
.smoothButtons ul li span {
    position: absolute;
    width: 200%;
    height: 100%;
    background-color: var(--secondary-color);
    transform: translateY(125%);
    border-radius: 50%;
    right: calc((var(--n) - 1) * 10%);
    transition: 0.5s;
    transition-delay: calc((var(--n) - 1) * 0.15s);
    z-index: -1;
}
.smoothButtons ul li:hover {
    box-shadow: -2px 0px 10px var(--secondary-color);
}
.smoothButtons ul li:hover button {
    color: var(--text-color-alt);
}
.smoothButtons ul li:hover span {
    transform: translateY(0) scale(2);
}
.smoothButtons ul li span {
    --n: 2;
} 
@media (max-width: 780px) {
  .sidebar{
      width: 50vw;
  }
}
@media (max-width: 480px) {
  .sidebar{
      width: 100vw;
  }
}
</style>