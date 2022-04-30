import "./startingMenu.css";


import Matchmaking from "../ThirdPage/Matchmaking";
import Options from "../ThirdPage/Options";
import Credits from "../ThirdPage/Credits";
import Profile from "../ThirdPage/Profile/Profile";
import Collection from "../ThirdPage/Collection";
import Login from "../FirstPage/Login";



import { useState } from "react";


function StartingMenu(account) {

  const [option,setOption]=useState(0);
  
console.log(option);
  
  switch (option) {

    

    case 1:// Profile
    return(<div> <Profile name={account.name}/> </div>)
      
    case 2:// Matchmaking
    return(<div> <Matchmaking /> </div>)

    case 3: // Collection
    return(<div> < Collection name={account.name} /> </div>)

    case 4: // Options
    return(<div> <Options /> </div>)

    case 5: // Credits
    return(<div> <Credits /> </div>)

    case 6: // Back to Login
    return(<div> <Login /> </div>)
      

////////////////
    default: // Menu
    return (
    
      <div style={{
  
        textAlignVertical: 'center'
       
      }}className="Menu">
  
  <p style={{
         fontSize: "15px",
         position: "fixed",    
         textAlign: "right",  
         width: "100%",
         margin : -20,
         }}>
      <b>Connected as: </b>
      {account.name}
      </p>
  
  
  
            <ul id="Optiuni">
    <br></br>
    <br></br>
  
  <li><a onClick={ ()=>{ setOption(1)  } }> Profile </a></li>
  <li><a onClick={ ()=>{ setOption(2)  } }> Matchmaking </a></li>
  <li><a onClick={ ()=>{ setOption(3)  } }> Collection </a></li>
  <li><a onClick={ ()=>{ setOption(4) } }> Options </a></li>
  <li><a onClick={ ()=>{ setOption(5) } }> Credits </a></li>
  <li><a onClick={ ()=>{ setOption(6) } }>  Exit </a></li>
  
  
  </ul>
  
  <p style={{
         fontSize: "10px",
         position: "fixed",    
         textAlign: "center", 
         bottom: "0px", 
         width: "100%",
         }}>
      <b>Game made by HCC Company inc.</b>
      </p>
  
  
  
      </div>
  
      
    );

  }//sfarsit switch
  

 


 



}

export default StartingMenu;
