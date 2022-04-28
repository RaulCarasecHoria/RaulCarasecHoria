import React from 'react'
import Hand from '../components/Hand';
import "./Duel.css";
import addButton from '../components/addButton';



var player1 =new Hand("player1");
var player2 =new Hand("player2");




const Duel = () => {




  return (

    <div> 
      
      <div id="hand_top"> {player2.showHand()}</div>
      <div id="table_top"> {addButton()} {addButton()} {addButton()} {addButton()}</div>

     {/*//////////////////////////////////////////////////////////////////////////////////*/} 
    
     <div id="table_bottom"> {addButton()} {addButton()} {addButton()} {addButton()}</div>
     <div id="hand_bottom"> {player1.showHand()}</div>
    
     </div>

  )





}

export default Duel