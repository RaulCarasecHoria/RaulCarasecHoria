import React from 'react'
import "./Profile.css";
import Chat from "./Chat";
const Profile = (account) => {
var lvl=5;





  return (
    <div>

lvl:{lvl}
<br/>
nume:
<br/>
imagine profil

<Chat name={account.name}/>

    </div>
  )







}

export default Profile