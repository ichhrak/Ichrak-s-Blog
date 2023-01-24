import { Link } from "react-router-dom";
import "./topbar.css"

export default function  () {
  const user = true;
  return (
    <div className='top '>
        <div className="topleft">
            <i className="topicon fa-brands fa-facebook"></i>
            <i className="topicon fa-brands fa-twitter"></i>
            <i className="topicon fa-brands fa-instagram"></i>
        </div>
        <div className="topcenter">
            <ul className="toplist">
            <li className="toplistitem"><Link className="link" to="/">HOME</Link></li>
            <li className="toplistitem">ABOUT</li>
            <li className="toplistitem">CONTACT</li>
            <li className="toplistitem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="toplistitem">LOGOUT</li></ul>
        </div>
        
        <div className="topright">
            <Link to="/settings">
            <img className="topimage"  src="https://pub-static.fotor.com/assets/projects/pages/d5bdd0513a0740a8a38752dbc32586d0/fotor-03d1a91a0cec4542927f53c87e0599f6.jpg" alt="" />
            </Link>
            <i className="topsearchicon fa-regular fa-magnifying-glass"></i>
        </div>
    </div>
  )
} 
