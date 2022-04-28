import React, { useState } from 'react';

import Login from "./Login.js";
import SignIn from "./SignIn.js";



const FirstPage = () => {

    //state for login
    // state=true (login)
    // state=false (signin)





const [state,changeState] = useState(true);


function changeStateFunction( whereTo ){

  if(whereTo==='inregistrare'){

    console.log('am schimbat pe inregistrare ');
    changeState(false);

  }

  if(whereTo==='login'){

  console.log('am schimbat pe login ');
  changeState(true);

  }
  
  }


  return (
   <div>

{state && <Login onAdd={ changeStateFunction } />}
{!state && <SignIn onAdd={ changeStateFunction }/>}



   </div>
  )




}


export default FirstPage