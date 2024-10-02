import './footer.css';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
function Footer(){
    const currentYear = new Date().getFullYear();

return(
<div className="footer">
<div className="main-footer">
<div className="footer-heading">
        <h1>Tech & Fun</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, velit alias eius non illum beatae atquerepellat ratione qui veritatis repudiandae adipisci maiores. At inventore necessitatibus deserunt exercitationem cumque earum</p>
</div>
<div className="footer-socials">
    <div className="footer-icons">
        <a href="www.twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
    </div>
    <div className="footer-icons">
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
    </div>
    <div className="footer-icons">
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
    <div className="footer-icons">
        <a href="www.facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
</div>
</div>
         <div className="footer-mini">
            <div className="footer-copyright">
            <p>copyright &copy; <span>{currentYear}</span> Fun & Tech</p>
            </div>
            <div className="footer-header">
         <ul>
                <li> <Link to="/">Home</Link></li>
               <li><Link to="/gallery">Gallery</Link></li>
               <li><Link to="/blog">Blog</Link></li>
                </ul>
         </div>
         </div>
</div>
    )
}export default Footer;
//35397975