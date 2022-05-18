import React from 'react';
import ReactDOM from 'react-dom';


//pg 1
import FirstPage from './FirstPage/FirstPage';

//import Duel from './Others/Duel';

import reportWebVitals from './reportWebVitals';
import StartingMenu from './SecondPage/startingMenu';
import Collection from './ThirdPage/Collection';
import Options from './ThirdPage/Options';


var pass="parola1234";



if (pass === "parola123") {


  ReactDOM.render(
      
  <StartingMenu />,
    
    document.getElementById('root')
  );


} 
else{
  
  ReactDOM.render(


      
<FirstPage />,

   
   document.getElementById('root')
   
  );
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


