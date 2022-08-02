import React, { Component  } from 'react';
import { BrowserRouter as Router,Route,Redirect } from "react-router-dom";
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import Home from './Home';
import Home1 from './Home1';
import Admin from './Admin';
import fire from './fire';
import Login from './Login';
import Signup from './Signup';


var email;
class App extends Component {

  constructor(props) {
    super(props);

    this.state = ({
      user:null,
      emailid:'',
    });
      this.authListener = this.authListener.bind(this);

  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
  fire.auth().onAuthStateChanged((user) => {

    if (user) {
      this.setState({ user });

    } else {
      this.setState({ user: null });


    }
    var user = fire.auth().currentUser;


  if (user != null) {
  email = user.email;

  this.setState({emailid:user.email});


  }

  });

}

  render() {



    return (
<Router>
  <div>


<Route path="/"   component={Signup} exact />
<Route path="/new"   component={Home}  />
<Route path="/new1"   component={Home1}  />


  </div>
  </Router>
    );
  }
}

export default App;
