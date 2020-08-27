import React from "react";
import { PageBanner } from "../PageBanner";

export const Contact = () => {
  return (
    <div className="contact">
      <PageBanner title="Contact" />
      <div className="content-body" id="contact-body">
        <div className="contact-info">
        <h1>Contact Info</h1>
          <p>
            24 Frank Lloyd Wright Drive <br/> Suite H1800 PO Box 533<br/> Ann
            Arbor MI 48106
          </p>
          <p>734.930.3394</p>
          <p>dmooney@edgedesignassociates.com</p>
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form>
            <label for="fullName">Full Name *</label>
            <input required type="text" name="fullName"/>
            <label for="companyName">Company Name</label>
            <input type="text" name="fullName"/>
            <label  for="phoneNumber">Phone Number</label>
            <input type="phone" name="phoneNumber"/>
            <label  for="email">Email *</label>
            <input required type="email" name="email"/>
            <label for="messageBody">Message *</label>
            <textarea wrap="off" required type="text" name="messageBody"/>
            <button type="submit">Send Message</button>
          </form>
          <p>* Required Fields</p>
        </div>
      </div>
    </div>
  );
};
