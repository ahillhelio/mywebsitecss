import React from 'react'
import './contactform.css'


const ContactForm = () => {
  return ( 
    <div className="container">  
            <form id="contact" action method="post">
              <h3>Contact Form</h3>
              <h4>Get in Touch!</h4>
              <fieldset>
                <input placeholder="Your name" type="text" tabIndex={1} required autofocus />
              </fieldset>
              <fieldset>
                <input placeholder="Your Email Address" type="email" tabIndex={2} required />
              </fieldset>
              <fieldset>
                <input placeholder="Your Phone Number (optional)" type="tel" tabIndex={3} required />
              </fieldset>
              <fieldset>
                <textarea placeholder="Leave your message here" tabIndex={5} required defaultValue={""} />
              </fieldset>
              <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
              </fieldset>
            </form>
          </div>
          )
    }
    export default ContactForm;


  // <div class="container">  
  //   <form id="contact" action="" method="post">
  //     <h3>Contact Form</h3>
  //     <h4>Get in Touch!</h4>
  //     <fieldset>
  //       <input placeholder="Your name" type="text" tabindex="1" required autofocus>
  //     </fieldset>
  //     <fieldset>
  //       <input placeholder="Your Email Address" type="email" tabindex="2" required>
  //     </fieldset>
  //     <fieldset>
  //       <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required>
  //     </fieldset>
  //     <fieldset>
  //       <textarea placeholder="Leave your message here" tabindex="5" required></textarea>
  //     </fieldset>
  //     <fieldset>
  //       <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
  //     </fieldset>
  //   </form>
  // </div>
