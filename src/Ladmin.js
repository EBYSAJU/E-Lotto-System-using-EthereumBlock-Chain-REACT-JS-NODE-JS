import React, { Component  } from 'react';
import {Redirect} from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,MDBView,MDBNavItem,MDBNavLink,MDBNavbar
} from "mdbreact";
import "./Ladmin.css";
import "./common.css";
import "./test.css";
class Signup extends Component {
  constructor(props) {
    super(props);

 this.handleChange = this.handleChange.bind(this);

  }
  state={
      user:null,
      emailid:'',
      bool:false,
      email:'',
      password:''

  };






  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  switchNameHandler = () =>
  {

  
    if(this.state.email==="ebysaju123@gmail.com"&&this.state.password==="10041004")
          this.setState({bool:true});
  



  }




  render() {



    return (

    <div  className="bg1">


{this.state.bool ? (<Redirect to='/admin'/>):null}




<MDBNavbar dark expand="md" fixed="top">
          <MDBContainer>
                <MDBNavItem >
                  <MDBNavLink className="change" to="/">Home</MDBNavLink>
                </MDBNavItem>


          </MDBContainer>
        </MDBNavbar>




      <MDBView>

    
        <MDBRow>
          <MDBCol md="6">
            <MDBCard >
              <MDBCardBody>
                <MDBCardHeader >
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Admin Login:
                  </h3>
                </MDBCardHeader>
                <form  >
                  <div >
                    <MDBInput value={this.state.email} onChange={this.handleChange}   name="email"
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <MDBInput value={this.state.password} onChange={this.handleChange}   name="password"
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                  </div>

                <div >

                  <MDBBtn className="button1"
          color="light-blue"

        type="submit" onClick={this.switchNameHandler}
                  >
                    Login
                  </MDBBtn>

                </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">

                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
   
      </MDBView>


    </div>


    );
  }
}

export default Signup;
