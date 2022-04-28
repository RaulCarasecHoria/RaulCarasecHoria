import Card from './Card';
import React,{ Component } from 'react';
import Axios from "axios";
import "./Player_Collection.css";




class Player_Collection extends Component{

 
  

constructor(string){



  super();
  

this.string=string;  

//this.collection=[new Card(1,5,3,3),new Card(2,7,2,4),new Card(3,8,6,5),new Card(4,9,9,4),new Card(5,10,4,6)]

this.collection=[new Card(1,5,3,3),new Card(1,5,3,3),new Card(1,5,3,3),new Card(1,5,3,3),new Card(1,5,3,3)];


  
}

showCollection(){

console.log("am intrat in show "+this.string);
console.log(this.collection);


  return(
//To identify the hand of the player
<div className= "grid" >


    {
    
    this.collection.map( (element)=>( element.drawCard() ) )
      
  }

</div>)
   
}

addNewCardToCollection(id,health,damage,mana){

console.log("added: "+id+health+damage+mana)
  this.collection.push(new Card(id,health,damage,mana))


}


deleteLastCardFromCollection(){
 
  this.collection.pop();
  
  }

  




getCardCollection(e) {
  
    var loggedId=0;
      Axios.post("http://localhost:3001/server/getPlayerIdByName",{Username: e}).then((response)=>{
      
    
        loggedId=response.data;
      
    
      Axios.post("http://localhost:3001/server/getCardCollections",{Player_id: String(loggedId)}).then((response)=>{
      
        for (const i in response.data) {
  
  if(loggedId === response.data[i].id_Player){
  
          console.log(response.data[i].id_Card);
          this.addNewCardToCollection(parseInt(response.data[i].id_Card),2,3,4);
          //this.collection.push(new Card(parseInt(response.data[i].id_Card),1,1,1))
        }
  
         }
       
      })
      
    })
  
   
  }




}




export default Player_Collection