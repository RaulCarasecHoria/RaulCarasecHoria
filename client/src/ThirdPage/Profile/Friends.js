import React from 'react'
import Axios from "axios";
import { useState } from 'react';

const Friends = ({name,onClickFriend}) => {
    const [array, setArray] = useState(null);

    
 
     
              
              Axios.post("http://localhost:3001/server/getAllPlayers",{Username: name}).then((response)=>{
              
              setArray(response.data);

            })



            if(array!=null){

                return array.map((value) => {
  
                  return <button onClick={() => {

                    Axios.post("http://localhost:3001/server/getPlayerIdByName",{Username: value.name}).then((response)=>{
      
    
        onClickFriend(response.data);
      


    })



                  }}
>{value.name}</button>
  
                })

              }
              else
              {
                  return (<button>raul</button>)
              }
        
            

           



           


}

export default Friends