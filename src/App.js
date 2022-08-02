import React, { Component  } from 'react';
import { BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import fire from './fire';
import Signup from './Signup';
import Ladmin from './Ladmin';
import Lhome from './Lhome';
import Vplayers from './Vplayers';
import Winner from './Winner';
import Tnumber from './Tnumber';
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
    

  });

}

  render() {



    return (
<Router>
  <div>


<Route path="/"   component={Signup} exact />
<Route path="/user"   component={Home}  />

<Route path="/admin"   component={Lhome}  />
<Route path="/login"   component={Ladmin}  />
<Route path="/view"   component={Vplayers}  />
<Route path="/winners"   component={Winner}  />
<Route path="/result"   component={Tnumber}  />


  </div>
  </Router>
    );
  }
}

export default App;
