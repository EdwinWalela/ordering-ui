import './App.css';
import { Component } from 'react';
import axios from 'axios';

class App extends Component{ 
  state = {
    code : "",
    deviceCode :""
  }

  getCode = async() =>{
    const BASE_URL = "http://142.93.219.198:3002/oauth"
    let res;
    try {
      res = await axios.post(BASE_URL,);

    } catch (err) {
      console.log(err)
    }

    this.setState({
      code:res.data.code,
      deviceCode:res.data["device-code"]
    })
    window.open(res.data["redirect"],'winname','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=500,height=650');
  }

  verifyAuth = async()=>{
    let BASE_URL = `http://142.93.219.198:3002/oauth/verify?device_code=${this.state.deviceCode}`
    let res;
    try {
      res = await axios.get(BASE_URL);

    } catch (err) {
      console.log(err)
    }
    alert(res.data.msg)
  }

  render(){
  return (
    <div className="App">
      <center>
        {this.state.code.length > 0  &&
         <h1>Your Code: {this.state.code}</h1>
        }
       
        <button onClick={this.getCode}>Login With Github</button>
        <br/>
        <button onClick={this.verifyAuth}>Verify Authentication</button>
      </center>
      
    </div>
  );
  }
}


export default App;
