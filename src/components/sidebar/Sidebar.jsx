import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebaritem">
            <span className="sidebartitle">ABOUT ME</span>
            <img className="sidebarimg" src="https://w0.peakpx.com/wallpaper/271/831/HD-wallpaper-butterfly-girl-pink.jpg" alt="" />
            <p className="sidebartext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
                 suscipit asperiores labore voluptate temporibus similique sunt </p>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">CATEGORIES</span>
            <ul className="sidebarlist">
                <li className="sidebarlistitem">life</li>
                <li className="sidebarlistitem">music</li>
                <li className="sidebarlistitem">style</li>
                <li className="sidebarlistitem">sport</li>
                <li className="sidebarlistitem">tech</li>
                <li className="sidebarlistitem">cinema</li>
            </ul>
        </div>
        <div className="sidebaritem">
            <span className="sidebartitle">FOLLOW US</span>
            <div className="sidebarsocial">
            <i className="sidebaricon fa-brands fa-facebook"></i>
            <i className="sidebaricon fa-brands fa-twitter"></i>
            <i className="sidebaricon fa-brands fa-instagram"></i>
            </div>
        </div>    
    </div>
  )
}
