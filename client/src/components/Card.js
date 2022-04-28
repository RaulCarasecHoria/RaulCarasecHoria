import "./Card.css"
import React,{ Component } from "react";



class Card extends Component{

   


    constructor(id,health,damage,mana){
        
        super();

        this.id=id;
        this.health=health;
        this.damage=damage;
        this.mana=mana;
       
        
    }

    drawCard(){
console.log("am intrat in draw "+this.id);

     switch(this.id){

 case 1:
 return(<button id={"card id: "+this.id} className="zmeu_art" > </button>)

 case 2:
 return(<button id={"card id: "+this.id} className="drac_art" > </button>)

 case 3:
 return(<button id={"card id: "+this.id} className="fataPadurii_art" > </button>)

 case 4:
 return(<button id={"card id: "+this.id} className="iala_art" > </button>)

 case 5:
    return(<button id={"card id: "+this.id} className="strigoi_art" > </button>)

 case 6:
    return(<button id={"card id: "+this.id} className="urs_art" > </button>)
       
   default:
    return(<button id={"card id: "+this.id} className="card_border" > </button>)


}

    }


}

export default Card

{/*<p  style={{fontSize: 9,fontFamily: "serif", bottom: 38 ,  left: 22 ,position: "absolute",color:"white",fontWeight: "lighter"}}>  Introduceti  </p>
<p  style={{fontSize: 9,fontFamily: "serif", bottom: 30 ,  left: 22 ,position: "absolute",color:"white",fontWeight: "lighter"}}>  Descrierea  </p>
<p  style={{fontSize: 9,fontFamily: "serif", bottom: 22 ,  left: 22 ,position: "absolute",color:"white",fontWeight: "lighter"}}>  Cartii  </p>




<p  style={{fontSize: 16, bottom: -4, left: 11,position: "absolute",wordSpacing:"55px",fontWeight: "bold"}}>  {this.damage} {this.health} </p>
        <p  style={{fontSize: 16, top: 1,   left: 10 ,position: "absolute",fontWeight: "bold"}}>  {this.mana}  </p>*/}
