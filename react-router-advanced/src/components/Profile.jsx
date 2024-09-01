import React from "react";
import { BrowserRouter as Route, Routes} from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile =() =>{
    // return(
    //     <div>
    //         <h1>Profile</h1>
    //         <nav>
    //             <ul>
    //                 <li><Link to= "details">Profile Details</Link></li>
    //                 <li><Link to="settings">Profile Settings</Link></li>
    //             </ul>
    //         </nav>
    //     </div>
    // )

    return (
        <div>
            <Routes>
                <Route path = "/" element = {<ProfileDetails/>}></Route>
                <Route path = "setting " element = {<ProfileSettings/>}/>
            </Routes>
        </div>
    )
}

export default Profile