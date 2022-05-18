import React from 'react'
import "./Profile.css";
import Chat from "./Chat";
import Friends from './Friends';
import { useState } from 'react';


const Profile = (account) => {
const [connectedId,setConnectedId] = useState(0);


var lvl=5;




//<button style={{position: "absolute", right: 50, top: 50 }} onClick={this.handleConnection}>Connect to Chat</button>
//<button style={{position: "absolute", right: 50, top: 70 }} onClick={this.getChatString}>Refresh</button>


 

const onClickFriend = (id) =>{

  setConnectedId(id)

  console.log(id);

}


  return (
    <div>

      <div className='Friends'>
<button>FRIENDS</button>
      <Friends name={account.name} onClickFriend={onClickFriend}/>

      </div>
      

lvl:{lvl}
<br/>
nume:
<br/>
imagine profil

<Chat name={account.name} connectedId={connectedId}/>


    </div>
  )







}

export default Profile