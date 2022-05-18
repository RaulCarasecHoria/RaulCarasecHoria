const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");


const mysql = require('mysql');
////////////////////////////////
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "password",
port:"3306",
database: "proiect_inginerie_industriala"
});

let userNameTaken = false;




////////
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
/////////


db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM player", function (err, result, fields) {
      if (err) throw err;
   
        console.log("Client connected");

       // for (const i in result) {
//
      //    console.log(result[i].id_Player);

     //      }
      

    });
  });
  

  app.post("/client/signin",(req,res)=>{
    
    //console.log("am primit post");
    const Username=req.body.Username;
    const Password=req.body.Password;

//logica unde verificam daca putem inregistra contul, daca putem il trimitem la baza de date
const sqlSelect = "SELECT * FROM player"
db.query(sqlSelect,(error,result)=>{

  for (const i in result) {

 if(String(result[i].name) === String(Username)){
   
   userNameTaken = true;


   console.log("exista deja "+userNameTaken);

 }

    }

    if(userNameTaken === false){

      //introducere credetiale
      const sqlInsert = "INSERT INTO player (name,password,level_Player) VALUES (?,?,?);"
      db.query(sqlInsert,[Username,Password,1],(err,res)=>{})


      // SETARE CONT

      //pachet carti basic

      //gasire id player

     // db.query("SELECT * FROM player",(error,result)=>{
//
      //  if(String(result[i].name) === String(Username)){

     //     console.log("player cu id ul:")
          
     //   }
         

    // })


     // console.log("Id-ul alocat este : "+allocatedPlayerId);
      //const sqlInsertBasicDeck = "INSERT INTO card_collection (id_Player,id_Collection,CollectionName,id_Card) VALUES (?,?,?,?);"
     // db.query(sqlInsert,[Username,Password,1],(err,res)=>{})



  
      console.log("Am inregistrat contul cu succes!");
  
    }
    else if(userNameTaken === true){
      console.log("Nume luat deja!");
    }
    else{
      console.log("Eroare userNameTaken!");
    }

  })//sfarsit query

  
  });//sfarsit post




//////////////////////


app.post("/server/login",(req,res)=>{

  
  //console.log("am primit post");
  const Username=req.body.Username;
  const Password=req.body.Password;

  console.log(Username);
  console.log(Password);

  var passwordIsCorrect;
 

  db.query("SELECT * FROM player", function (err, result) {

   passwordIsCorrect=false;

      for (const i in result) {

       if(String(result[i].name) === String(Username)){

        if(String(result[i].password) === String(Password)){

          passwordIsCorrect = true;
        }

       }

 }
    

 console.log(passwordIsCorrect);
 
 if(passwordIsCorrect){

  
  res.send("pass is correct !");

 }
 else{
  res.send("pass is incorrect !");
 }

  });


});

app.post("/server/getPlayerIdByName",(req,res)=>{

  //console.log("am primit post");
  const Username=req.body.Username;
 
 
  
  db.query("SELECT * FROM player", function (err, result) {
var loggedId=0;
    
 
       for (const i in result) {
 
        if(String(result[i].name) === String(Username)){       
loggedId=result[i].id_Player;
        }
 
  }

  if(loggedId !== 0){
res.send(String(loggedId));
  }
  else{
    console.log("Nu am gasit id-ul dupa nume");
    res.send("0");
  }
     
 
   });


});



app.post("/server/getChatString",(req,res)=>{


  var Id_Request=req.body.Player1_id;
  var Id_ToConnect=req.body.Player2_id;

if(Id_ToConnect == 0)//caz in care nu suntem conectati cu nimeni
 Id_Request=0;


  console.log("am primit post chat conectare "+Id_Request+" - "+Id_ToConnect);
  
  const sqlSelect = "SELECT chat FROM direct_messages WHERE (id_Player1=? AND id_Player2=?) OR (id_Player1=? AND id_Player2=?)";
  db.query(sqlSelect,[Id_Request,Id_ToConnect,Id_ToConnect,Id_Request],(err, result)=>{

   try{
res.send(result[0].chat);
   }
   catch(error){
    const sqlInsert = "INSERT INTO direct_messages (id_Player1,id_Player2,chat) VALUES (?,?,?);"
    db.query(sqlInsert,[Id_Request,Id_ToConnect,""],(err,res)=>{})
   }

});


});


app.post("/server/getAllPlayers",(req,res)=>{


  const username=req.body.Username;
 
  //console.log("am primit post chat conectare "+username);
  
  const sqlSelect = "SELECT id_Player,name FROM player;";
  db.query(sqlSelect,(err, result)=>{
   
    

res.send(result.filter(aux => aux.name != username && aux.name !="inexistent"));

});


});



app.post("/server/updateChatString",(req,res)=>{


  const string=req.body.updateChatString;
  const Id_Request=req.body.Player1_id;
  const Id_ToConnect=req.body.Player2_id;
  
  
  const sqlInsert = "UPDATE direct_messages SET chat=? WHERE (id_Player1=? AND id_Player2=?) OR (id_Player1=? AND id_Player2=?)";
  db.query(sqlInsert,[string,Id_Request,Id_ToConnect,Id_ToConnect,Id_Request],(err,res)=>{})
   

});



app.post("/server/getCardCollections",(req,res)=>{

  console.log("am primit post");
  const Id_Request=req.body.Player_id;


  
  
  db.query("SELECT * FROM card_collections ", function (err, result) {
   
 
 

   res.send(result);

  

});

});

app.listen(3001, () => {
console.log("running on port 3001")

})