import "./contact.css"

function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <form data-aos="zoom-in"  data-aos-delay="100">
        <div className='form-input'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className='form-input'>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className='form-input'>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" placeholder="Type your message here" required></textarea>
        </div>
        <div className='form-button'>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  )
}

export default Contact;
