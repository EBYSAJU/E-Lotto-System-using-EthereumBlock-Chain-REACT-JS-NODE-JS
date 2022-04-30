import React, { Component  } from 'react';

import './App.css';
import web3 from './web3';

import Home from './Home';

import {BrowserRouter, Route, Link, NavLink,Redirect } from 'react-router-dom';




class GoogleAuth extends Component {
  state = {isSignedIn: null,
    bool:false
  };
componentDidMount(){
  window.gapi.load('client:auth2',() => {
window.gapi.client.init({
  clientId:'278156417393-7hhdhlj56a1dg09h2tuon90qru9frmgb.apps.googleusercontent.com',
  scope:'email'
}).then(()=> {
  this.auth =window.gapi.auth2.getAuthInstance();
  this.setState({ isSignedIn: this.auth.isSignedIn.get()});
  this.auth.isSignedIn.listen(this.onAuthChange);

});

  });
}
onAuthChange = () =>{
this.setState({ isSignedIn:this.auth.isSignedIn.get()});
};
onSignIn = () => {
  this.auth.signIn();

};
onSignOut = () => {
  this.auth.signOut();
  this.setState({bool:true});
};
renderAuthButton(){
  if(this.state.isSignedIn===null){
    return null;
  }else if (this.state.isSignedIn) {
    return (
      <button onClick={this.onSignOut} className="ui red google button">
      <i className="google icon"/>
      Signout
      </button>

    );
  }else{
    return(
      <button  onClick={this.onSignIn} className="button1" >
      <i className="google icon"/>
      SignIn with google
      </button>



    );
  }
}

  render() {



    return (<div>{this.renderAuthButton()}
    {this.state.isSignedIn ? (<Redirect to='/user' />) :null}</div>


    );





  }
}

export default GoogleAuth;
