/* eslint-disable jsx-a11y/iframe-has-title */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contact.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Card from '../../ui/card/card';
import SectionTitle from '../../ui/section-title/section-title';

function Contact() {
    return (
        <Card>
            <div className="container">
               <SectionTitle>Contact Us</SectionTitle> 

                <div className="contact-row">
                    {/* Email Form */}
                    <div className="contact-col">
                        <h3>Email Us</h3>
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" placeholder="Your Name" className="form-input" />
                                <input type="email" placeholder="Your Email" className="form-input" />
                            </div>
                            <textarea placeholder="Your Message" className="form-textarea"></textarea>
                            <button className="submit-btn">Submit Now</button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="contact-col">
                        <h3>Talk to Us</h3>
                        <div className="contact-info">
                            <div className="info-item">
                                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                                <p>Phone No.: 0234333011</p>
                            </div>
                            <div className="info-item">
                                <FontAwesomeIcon icon={faPhone} className="info-icon" />
                                <p>Phone No.: 0542020222</p>
                            </div>
                        </div>
                    </div>

                    {/* Location Map */}
                    <div className="contact-col">
                        <h3>Location</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31766.094698028402!2d-0.0724181!3d5.60215935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf87e2ae3d7967%3A0x36acb2da425cbdbd!2sNUNGUA!5e0!3m2!1sen!2sgh!4v1724728273043!5m2!1sen!2sgh" 
                            width="100%" 
                            height="400" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            className="map-frame">
                        </iframe>
                    </div>
                </div>
            </div>
            </Card>
    );
}

export default Contact;
