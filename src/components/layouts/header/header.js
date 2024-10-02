import { Link } from 'react-router-dom';
import './header.css'
function Header(){
return(
    <div className="header">
        <div className="nav-img">
            <img src="../logo.jpeg" alt="logo"/>
        </div>
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
               
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    </div>
)
}export default Header;