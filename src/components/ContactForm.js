import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function ContactUs() {

  const [view, setView] = useState(false)

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('service_6wuwpae', 'template_efwa4ru', e.target, 'user_7XiHEX24HZMuUJUdjIXjH')
      .then((result) => {
          emailjs.sendForm('service_6wuwpae', 'template_s44z4w8', e.target, 'user_7XiHEX24HZMuUJUdjIXjH')
          .then((result) => {
              console.log(result.text)
              setView(true)
          }, (error) => {
              console.log(error.text)
          })
      }, (error) => {
          console.log(error.text)
      })
  }

  if(!view){
    return (
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" placeholder="..." />
        <label>Nom / Société</label>
        <input type="text" name="user_name" placeholder="..." />
        <label>Adresse Email *</label>
        <input type="email" name="user_email" placeholder="..." />
        <label>Message</label>
        <textarea name="message" placeholder="..." />
        <input type="submit" value="Envoyer" />
      </form>
    )
  }else{
    return (
      <h3 className="send-success">Envoi réussi, merci pour votre message !</h3>
    )
  }
  
}