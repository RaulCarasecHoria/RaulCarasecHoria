import React from "react";
import Axios from "axios";

class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Enter Message'
      };


      this.connectWith=0;//id cu care comunicam
      this.loggedId=0; //id conectat 

      this.string= {value: ""};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleConnection = this.handleConnection.bind(this);

      this.updateChatString = this.updateChatString.bind(this);
      this.getChatString = this.getChatString.bind(this);
    }


    componentDidMount() {
      this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }


  
    handleChange(event) {
        this.setState({value: event.target.value});

        this.forceUpdate();
    }
  
    handleSubmit(event) {
      console.log(this.state.value);
      event.preventDefault();

      this.string.value+="\n"+this.props.name+": "+this.state.value;//scriere rand nou cu nume

      this.updateChatString();//update de database
      this.getChatString();//get the current chat string

      this.setState({value: ""});//resetare
    }

    handleConnection() {
console.log("am apasat "+this.props.name);
      
      Axios.post("http://localhost:3001/server/getPlayerIdByName",{Username: this.props.name}).then((response)=>{
      
    
        this.loggedId=response.data;
      
    console.log("id gasit: "+this.loggedId);

    //cautam toate dm-urile playerului

//in functie de ce buton apasa se face conectiunea cu unu dintre playeri.(buton cu numele celorlalti)
if(this.props.name === "raul"){
  this.connectWith=2;
}
else 
this.connectWith=1;
//am stabilit conexiunea


this.getChatString();

    })

    }


    getChatString(){

//facem rost de string
Axios.post("http://localhost:3001/server/getChatString",{Player1_id: String(this.loggedId),Player2_id: String(this.connectWith),}).then((response)=>{
      
  this.string.value = response.data;

  })

    }

    updateChatString(){

      
      Axios.post("http://localhost:3001/server/updateChatString",{Player1_id: String(this.loggedId),Player2_id: String(this.connectWith),updateChatString: this.string.value}).then((response)=>{
            
        })
      
          }




  
    render() {
      return (
          <div>

            <button style={{position: "absolute", right: 50, top: 50 }} onClick={this.handleConnection}>Connect to Chat</button>
            <button style={{position: "absolute", right: 50, top: 70 }} onClick={this.getChatString}>Refresh</button>

<textarea style={{width: "200px",height: "600px"}} value={this.string.value}/>

        <form onSubmit={this.handleSubmit} style={{position: "absolute", left: 0, bottom:0}}>
          <label>
            Chat:
            <input value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Send" />
        </form>

        </div>
      );
    }
  }


  export default Chat