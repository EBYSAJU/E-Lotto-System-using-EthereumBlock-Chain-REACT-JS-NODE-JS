import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import fire from './fire';
import {Redirect} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import './test.css';
class Home extends Component {
  constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);


    }
    logout() {
this.setState({ bool:true  });
fire.auth().signOut();
        }

 state = {
      manager: '',
      players: [],
      balance: '',
      value: '1',
      message: '',
     lastwinner: [],
     secondwinner:[],
     thirdwinner:[],
     random:'',
     text:'',
     possible:'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
     name:'',
     winnernumber:'',
     winnername:'',
     winnernumber1:'',
     winnername1:'',
     winnernumber2:'',
     winnername2:'',

     bool:false
    };
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getplayers().call();
    const lastwinner = await lottery.methods.winner().call();
    const secondwinner = await lottery.methods.winner1().call();
    const thirdwinner = await lottery.methods.winner2().call();
    const winnernumber = await lottery.methods.winnernumber().call();
    const winnername = await lottery.methods.winnername().call();
    const winnernumber1 = await lottery.methods.winnernumber1().call();
    const winnername1 = await lottery.methods.winnername1().call();
    const winnernumber2 = await lottery.methods.winnernumber2().call();
    const winnername2 = await lottery.methods.winnername2().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager,players,balance,lastwinner,secondwinner,thirdwinner,winnernumber,winnername,winnername1,winnername2,winnernumber1,winnernumber2});

  }

  onSubmit = async event => {
  event.preventDefault();

  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.enter(this.state.random,this.state.name).send({
    from: accounts[0],
    value: web3.utils.toWei(this.state.value, 'ether')
  });

  this.setState({ message: 'You have been entered!' });
};
onClick = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.pickwinner().send({
    from: accounts[0]
  });

  this.setState({ message: 'First winner has been picked!'  });


};
onClick1 = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.pickwinner1().send({
    from: accounts[0]
  });

  this.setState({ message: 'Second winner has been picked!'  });


};
onClick2 = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.pickwinner2().send({
    from: accounts[0]
  });

  this.setState({ message: 'Third winner has been picked!'  });


};
onremove = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.remove().send({
    from: accounts[0]
  });

  this.setState({ message: ' winner has been removed!'  });


};
onremove1 = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.remove1().send({
    from: accounts[0]
  });

  this.setState({ message: 'winner has been removed!'  });


};
onclear = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.clear().send({
    from: accounts[0]
  });

  this.setState({ message: ' Data has been cleared!'  });


};
ontransfer = async () => {
  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.transfer().send({
    from: accounts[0]
  });

  this.setState({ message: ' Ether has transfered!'  });


};


namechangedHandler = () =>
{
  this.setState({name:''});
}

  render() {
    const style={
      backgroundColor:'skyblue'
    };


    return (


      <div className="bg">
      {this.state.bool ? (<Redirect to='/' />) : null}


          <h2>Lottery Contract</h2>
          <p>
            This contract is managed by {this.state.manager}.
            There are currently{' '}
          {this.state.players.length} people entered, competing to win{' '}
          {web3.utils.fromWei(this.state.balance, 'ether')} ether!
          </p>
          <hr />



      <h1>click to pick a winner</h1>

      <Button  style={style} onClick={this.onClick}>Pick a winner1!</Button>
      <Button style={style} onClick={this.onClick1}>Pick a winner2!</Button>
      <Button style={style} onClick={this.onClick2}>Pick a winner3!</Button>
      <Button style={style} onClick={this.onremove}>Remove!</Button>
      <Button style={style} onClick={this.onremove1}>Remove1!</Button>
      <Button style={style} onClick={this.ontransfer}>Transfer</Button>


      <hr />

      <h1>{this.state.message}</h1>


      <h1>List of Winners</h1>

      <p>  First winner number is {this.state.winnernumber}</p>
      <p> First winner name is {this.state.winnername}</p>
      <p>  Second winner number is {this.state.winnernumber1}</p>
      <p> Second winner name is {this.state.winnername1}</p>
      <p>  Third winner number is {this.state.winnernumber2}</p>
      <p> Third winner name is {this.state.winnername2}</p>



<Button  style={style} onClick={this.logout}>LOGOUT</Button>




            </div>

    );
  }
}

export default Home;
