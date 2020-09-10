import React from "react";
import { PageBanner } from "../PageBanner";
import "./_Contact.scss";

export const Contact = () => {
  return (
    <div className="contact">
      <PageBanner
        title="Contact"
        img="https://picsum.photos/300/600?random=42"
      />
      <div className="contact-wrapper">
        <div className="contact-info">
          <h1 className="section-heading">Contact Info</h1>
          <div className="google-maps">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.1739126245748!2d-83.68498118425263!3d42.31748924578101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883cb0c378940001%3A0x165e21dbbe85c3a1!2sEdge%20Design%20Associates!5e0!3m2!1sen!2sus!4v1599765595548!5m2!1sen!2sus"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            />
          </div>
          <p>
            24 Frank Lloyd Wright Drive <br /> Suite H1800 PO Box 533
            <br /> Ann Arbor MI 48106
          </p>
          <p>734.930.3394</p>
          <a href = "mailto: dmooney@edgedesignassociates.com">dmooney@edgedesignassociates.com</a>
        </div>
        <div className="contact-form">
          <h1 className="section-heading">Let's Talk</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form>
      <label> Your Name </label>
      <input name="name" />
      <label> Your Email </label>
      <input name="email" />
      <label> Subject </label>
      <input name="subject" />
      <label> Message </label>
      <textarea name="message" />
      <button type="submit"> Send </button>
    </form>
  );
};
