import React from 'react'
import Axios from "axios";
import { useState } from 'react';

const Friends = (props) => {
    const [array, setArray] = useState(null);

    
 
     
              
              Axios.post("http://localhost:3001/server/getAllPlayers",{Username: props.name}).then((response)=>{
              
              setArray(response.data);

            })



            if(array!=null){

                return array.map((number) => {
  
                  return <button>{number.name}</button>
  
                })

              }
              else
              {
                  return (<button>raul</button>)
              }
        
            

           



           


}

export default Friends