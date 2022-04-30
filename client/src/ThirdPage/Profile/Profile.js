import React from 'react'
import "./Profile.css";
import Chat from "./Chat";
import Friends from './Friends';
const Profile = (account) => {
var lvl=5;




//<button style={{position: "absolute", right: 50, top: 50 }} onClick={this.handleConnection}>Connect to Chat</button>
//<button style={{position: "absolute", right: 50, top: 70 }} onClick={this.getChatString}>Refresh</button>

  return (
    <div>

      <div className='Friends'>
<button>FRIENDS</button>
      <Friends name={account.name}/>

      </div>
      

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