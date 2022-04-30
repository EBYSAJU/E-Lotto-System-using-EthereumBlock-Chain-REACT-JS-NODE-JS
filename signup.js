import React, { Component  } from 'react';

import './App.css';
import web3 from './web3';
import lottery from './lottery';
import sign from './sign';
import {BrowserRouter, Route, Link } from 'react-router-dom';



class App extends Component {
  state = {
      fullname:'',
      password: '',
      message:'',
      aname:[],
      apassword:[],
      message1:''

    };
    async componentDidMount() {
      const aname = await sign.methods.details().call();
      const apassword = await sign.methods.details().call();


      this.setState({aname,apassword});

    }
    onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success...' });

    await sign.methods.enter(this.state.fullname,this.state.password).send({
      from: accounts[0]

    });
    this.setState({ message: 'Username and Password succesfully entered!'  });
  }


  render() {


    return (



      <div className="signup" >
          <h1>signup page</h1>
          <form onSubmit={this.onSubmit}>

            <div>

              <input type="text" placeholder="NAME" fullname={this.state.fullname}
              onChange={event => this.setState({ value: event.target.fullname })} />
              <hr/>

              <input type="text" placeholder="PASSWORD" password={this.state.password}
              onChange={event => this.setState({ value: event.target.password })}/>
              </div>
              <button >SUBMIT</button>
              <h1>name is:{this.state.fullname}</h1>
              <h1>name is:{this.state.password}</h1>
            </form>
            <hr />

            <h1>{this.state.message}</h1>






  </div>



    );
  }
}

export default App;
