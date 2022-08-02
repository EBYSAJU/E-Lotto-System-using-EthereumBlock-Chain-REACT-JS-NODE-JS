import React, { Component } from 'react';
import './App.css';
import lottery from './lottery';
import "semantic-ui-css/semantic.min.css";
import {Redirect } from "react-router-dom";
import './test.css';
class Home extends Component {
state = {

     lastwinner: [],
     secondwinner:[],
     thirdwinner:[],
     winnernumber:'',
     winnername:'',
     winnernumber1:'',
     winnername1:'',
     winnernumber2:'',
     winnername2:'',



    };
  async componentDidMount() {

    const lastwinner = await lottery.methods.winner().call();
    const secondwinner = await lottery.methods.winner1().call();
    const thirdwinner = await lottery.methods.winner2().call();
    const winnernumber = await lottery.methods.winnernumber().call();
    const winnername = await lottery.methods.winnername().call();
    const winnernumber1 = await lottery.methods.winnernumber1().call();
    const winnername1 = await lottery.methods.winnername1().call();
    const winnernumber2 = await lottery.methods.winnernumber2().call();
    const winnername2 = await lottery.methods.winnername2().call();


    this.setState({lastwinner,secondwinner,thirdwinner,winnernumber,winnername,winnername1,winnername2,winnernumber1,winnernumber2});

  }







  render() {
   


    return (


      <div className="bg">
      {this.state.bool ? (<Redirect to='/' />) : null}


          <h2>Lottery Contract</h2>

          <hr />





      <h1>{this.state.message}</h1>

    {/*  <p>First winner is {this.state.lastwinner}.</p>
      <p> Second winner is {this.state.secondwinner}.</p>
      <p> Third winner is {this.state.thirdwinner}.</p>*/}
      <h1>List of Winners</h1>

      <p>  First winner number is {this.state.winnernumber}</p>
      <p> First winner name is {this.state.winnername}</p>
      <p>  Second winner number is {this.state.winnernumber1}</p>
      <p> Second winner name is {this.state.winnername1}</p>
      <p>  Third winner number is {this.state.winnernumber2}</p>
      <p> Third winner name is {this.state.winnername2}</p>









            </div>

    );
  }
}

export default Home;
