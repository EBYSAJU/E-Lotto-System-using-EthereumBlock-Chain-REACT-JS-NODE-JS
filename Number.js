import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import Signup from './Signup';
import App from './App';
import fire from './fire';
import "semantic-ui-css/semantic.min.css";
import Login from './Login';
import { BrowserRouter as Router,Route,Redirect } from "react-router-dom";
import './test.css';




class Home extends Component {





  state = {

      Numbers: []
    };
  async componentDidMount() {


    const Numbers = await lottery.methods.getnumbers().call();



    this.setState({Numbers});


  }


  render() {



    return (


      <div className="bg">

{this.state.Numbers[0]}






            </div>

    );
  }
}

export default Home;
