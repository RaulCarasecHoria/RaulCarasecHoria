import Card from './Card';
import "./Hand.css"
import React,{ Component } from 'react';






class Hand extends Component{


  

constructor(string){

  super();
  

this.string=string;  

//this.hand=[new Card(1,5,3,3,{x:0,y:0}),new Card(2,7,2,4,{x:0,y:0}),new Card(3,8,6,5,{x:0,y:0}),new Card(4,9,9,4,{x:0,y:0}),new Card(5,10,4,6,{x:0,y:0})]

 


}


showHand(){

  return(

//To identify the hand of the player
<div style={{position: 'fixed'}}className= {this.string} >

  
    {/*this.hand.map( (element)=>( element.drawCard()  ) )*/}



</div>

  )
  
}
/*
addNewCard(id,health,damage,mana,position){

  if(this.hand === undefined) 
  {
    return(<></>)
  }

  this.hand.push(new Card(id,health,damage,mana,position))

}
*/





}




export default Hand