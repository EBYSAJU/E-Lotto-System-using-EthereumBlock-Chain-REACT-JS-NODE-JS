import React,{ Component } from 'react';
import {Button } from 'semantic-ui-react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import fire from './fire';
import "semantic-ui-css/semantic.min.css";
import {Redirect } from "react-router-dom";
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


namechangedHandler = () =>
{
  this.setState({name:''});
}
switchNameHandler = () =>
{
  this.setState({text:''});

for (var i = 0; i < 2; i++)
this.state.text += this.state.possible.charAt(Math.floor(Math.random() * this.state.possible.length));
this.state.text=this.state.text+"-";
var number="0123456789";
for (i = 0; i < 6; i++)
    this.state.text += number.charAt(Math.floor(Math.random() * number.length));




this.setState({random:this.state.text});
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

      <form onSubmit={this.onSubmit}>
        <h1>Enter the amount in Ether</h1>
        <div>
          <h6>Amount of ether </h6>
          <input
            value={this.state.value}   />
          { /* onChange={event => this.setState({ value: event.target.value })}*/}

          <hr/>
          <h6>Ticket number</h6>
          <input  value={this.state.random} /><hr/>
          <h6>Name</h6>
          <input  name="name"

            onChange={event => this.setState({ [event.target.name]: event.target.value })}
          />
          <hr/>

      </div>

        <Button style={style} class="enters">Enter</Button>
        <hr/>
      </form>

  <Button  style={style} onClick={this.switchNameHandler}>Ticket generator</Button>
      <hr />



      <h1>{this.state.message}</h1>


      <h1>List of Winners</h1>
      <p> random number is {this.state.random}.</p>
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
