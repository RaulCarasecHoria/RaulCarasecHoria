import { useState } from "react";
import "./Login.css";
import Axios from "axios";

//pg 2
import StartingMenu from '../SecondPage/startingMenu';




const Login = ( { onAdd } ) => {


  const [passwordIsCorrect,setPasswordIsCorrect]=useState(false);
  const [username,setUsername]= useState('');
  const [password,setPassword]= useState('');




const onSubmit = (e) => {
  e.preventDefault();

  onAdd('inregistrare');


}

const tryToLogin = (e) => {

  

  Axios.post("http://localhost:3001/server/login",{Username: username,Password: password}).then((response)=>{
  
  console.log(response.data);

  if(response.data === "pass is correct !"){
 
    setPasswordIsCorrect(true);

  }

  if(response.data === "pass is incorrect !"){

  }

  })

  //aici este logica de verificare a campurilor 

  console.log(" username= "+ username)
  console.log(" password= "+ password)
  


}


    if(!passwordIsCorrect){
return(
  <div className="Logare">

<center><h1 className="Title_Login">LOGIN</h1></center>

    

    <div className="Login">

    <label>Username</label>
    <input onChange={ (e) =>setUsername(e.target.value) } type="text" name="Username" value={username} />
    
    <label>Password</label>
    <input onChange={ (e) =>setPassword(e.target.value) } type="text" name="Password" value={password}/>
    
    <br/>
    
    <div style={{display: "flex", flexDirection:"row", alignContent:"space-between",gap:"20px"}}>
      




    <button onClick={ tryToLogin }>Autentifica-te</button>

    <button onClick={ onSubmit }>Catre Inregistrare</button>




    
    </div>
    
    </div>

    </div>

)
    }else{
      return(<div>

<StartingMenu name={username}/>

      </div>)


setUsername('');
setPassword('');


    }
 
}







export default Login