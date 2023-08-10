import React from 'react';
import img from './img/1.png'
import './Contact.css'
import contact from './img/contact.png'
import ContactInfo from './ContactInfo';
import resume from './img/vikasResume.pdf'
const Contact= () => {
  return (
    <div>
    <div className="contactBox slide-out">
      <div className="contact1">
        <img src={img} alt="" />
      </div>
      <div className="contact2">
        <div className="contact2a">
          Contact Me
        </div>
        <div className="contact2b">
        These are the Platforms actively used by me. <br />You can contact me on these provided platform I will respond <br /> within 24 hour.I can help you with Front End Web development <br />and also a little about backend as well.
        </div>
        <div className="contact2c">
          <ContactInfo/>
        </div>
        <div className="contact2d">
          <a href={resume} target='_blank'  rel="noreferrer">My Resume</a>
        </div>
      </div>
    </div>
    <div className="contactBoxInfo" data-aos="fade-up">
      <div className="contactBox2">
        <div className="contactBox2a">
          <ul className="contactBoxList">
            <li className="big">
              Address
            </li>
            <li className="small">
              456, near Highway High School, Sec-45,Kanhai Gaon,Gurgaon Haryana 122003 
            </li>
            <li className="big">
              Phone Number
            </li>
            <li className="small">
              8598989010
            </li>
            <li className="big">
              Email
            </li>
            <li className="small">
              <a href="mailto:vikasrajpoot479@gmail.com">&#9993; vikasrajpoot479@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="contactBox1">
        <img src={contact} alt="contactImg" />
      </div>
    </div>
    </div>
  );
};

export default Contact;
