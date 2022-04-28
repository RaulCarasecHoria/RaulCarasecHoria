import React from 'react'
import "./Collection.css";
import Player_Collection from '../components/Player_Collection';
import { useState } from 'react';







var player_Collection=new Player_Collection("RAUL");



function btnTapped() {
  console.log('tapped');
}



const Collection = (account) => {
 

  const [state, setState] = useState(false);
  
  return (


    
 <div className="card" > 




{player_Collection.getCardCollection(account.name)}

{state ? player_Collection.showCollection():<></>}

<button style={{ right: 0}}onClick={function(e) { setState(true);}}>Colectia 1</button>


 </div>

    


  )



}


  

  






export default Collection