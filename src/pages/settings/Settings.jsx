import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className='settings'> 
        <div className="settingsWrapper">
            <div className="settingsTitle">
            <span className="settingsTitleUpdate">Update Your Account</span>
            <span className="settingsTitleDelete">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img
                    src="https://i.pinimg.com/564x/93/ec/ff/93ecffb0207084e44a9ab3f674c1b6c5.jpg"
                    alt=""
                    />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                    </label>
                    <input
                        id="fileInput"
                        type="file"
                        style={{ display: "none" }}
                        className="settingsPPInput"
                    />
                </div>  
                <label>Username</label>
                <input className="settingsinput" type="text" placeholder="Ichrak" name="name" />
                <label>Email</label>
                <input className="settingsinput" type="email" placeholder="Ichrak@gmail.com" name="email" />
                <label>Password</label>
                <input className="settingsinput" type="password" placeholder="Password" name="password" />
                <button className="settingsSubmitButton" type="submit">
                    Update
                </button>
            </form>       
                
        </div>
    <Sidebar />
    </div>
  )
}
