import "./SignIn.css"
import Axios from "axios";
import { useState } from "react";



const SignIn = ( {onAdd} ) => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
      
        onAdd('login');
      
      
      }

      const tryToSignIn = () => {
        


Axios.post("http://localhost:3001/client/signin",{Username: username,Password: password})
.then(() => {
alert("EROARE trimitere post!")});


      };


     

    return( 

      
        <div className="Inregistrare"> 
      
          <h1 className="Title">INREGISTRARE</h1>

          <div className="SignIn">
          <label>Username</label>
          <input type="text" name="Username" onChange={(e)=>{
setUsername(e.target.value);
          }}/>
          
          <label>Password</label>
          <input type="text" name="Password" onChange={(e) =>{
            setPassword(e.target.value);
          }}/>
          
          <br/>
          
          <div style={{display: "flex", flexDirection:"row", alignContent:"space-between",gap:"20px"}}>


          <button onClick={onSubmit}>Catre Login</button>
  
          <button onClick={tryToSignIn}>Inregistreaza-te</button>
          
          </div>
          
          </div>
      
          </div>
          
      )






}

export default SignIn




