import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Please fill out the form below.</p>
        
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@gmail.com" required />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
