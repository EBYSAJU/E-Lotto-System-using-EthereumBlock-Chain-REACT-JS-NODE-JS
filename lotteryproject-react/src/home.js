import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';


class App extends Component {

  state = {
      manager: '',
      players: [],
      balance: '',
      value: '',
      message: '',
     lastwinner: []
    };
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getplayers().call();
    const lastwinner = await lottery.methods.winner().call();
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({manager,players,balance,lastwinner});

  }
  onSubmit = async event => {
  event.preventDefault();

  const accounts = await web3.eth.getAccounts();

  this.setState({ message: 'Waiting on transaction success...' });

  await lottery.methods.enter().send({
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

  this.setState({ message: 'A winner has been picked!'  });


};
  render() {


    return (


      <div>
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
          <label>Amount of ether to enter</label>
          <input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
          />


        </div>

        <button class="enters">Enter</button>
      </form>


      <hr />

      <h1>click to pick a winner</h1>
      <button onClick={this.onClick}>Pick a winner!</button>

      <hr />

      <h1>{this.state.message}</h1>

      <p>the winner is {this.state.lastwinner}.</p>
      <p> </p>


            </div>

    );
  }
}

export default App;
