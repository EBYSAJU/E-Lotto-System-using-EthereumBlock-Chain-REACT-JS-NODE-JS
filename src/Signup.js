import React, { Component  } from 'react';
import {Redirect} from "react-router-dom";
import {
MDBNavbar,MDBNavItem, MDBNavLink, MDBMask, MDBRow,
MDBCol, MDBIcon,
MDBBtn, MDBView, MDBContainer, MDBCard, MDBCardBody, MDBInput
} from "mdbreact";
import fire from './fire';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./common.css";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
     this.signup = this.signup.bind(this);
 this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
	  user:null
    }
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
  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      });
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }




  render() {



    return (

    <div id="classicformpage">




{this.state.user ? (<Redirect to='/user' />) : null}



<MDBNavbar dark expand="md" fixed="top">
          <MDBContainer>
                <MDBNavItem >
                  <MDBNavLink className="change1" to="/login">AdminLogin</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBNavLink className="change1" to="/view">Players</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBNavLink className="change1" to="/winners">Winners</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem >
                  <MDBNavLink className="change1" to="/result">Result</MDBNavLink>
                </MDBNavItem>



          </MDBContainer>
        </MDBNavbar>


      <MDBView>

        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                <h1 className="h1-responsive font-weight-bold">
                  E-Lottery System{" "}
                </h1>
                <hr className="hr-light" />


              </div>
              <MDBCol md="6" xl="5" className="mb-4">
                <MDBCard id="classic-card">
                  <MDBCardBody className="z-depth-2 white-text">
                    <h3 className="text-center">
                      <MDBIcon icon="user" /> Register:
                    </h3>
                    <hr className="hr-light" />

                    <MDBInput value={this.state.email} onChange={this.handleChange}   name="email" label="Your email" icon="envelope" className="change" />
                    <MDBInput value={this.state.password} onChange={this.handleChange}   name="password" label="Your password" icon="lock" type="password"  className="change"/>
                    <div className="text-center mt-4 black-text">
                        <MDBBtn color="indigo" className="button1" onClick={this.login}>Login</MDBBtn>
                      <MDBBtn color="indigo" className="button1" onClick={this.signup}>Sign Up</MDBBtn>


                      <hr className="hr-light" />

                    </div>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </MDBView>


    </div>


    );
  }
}

export default Signup;
