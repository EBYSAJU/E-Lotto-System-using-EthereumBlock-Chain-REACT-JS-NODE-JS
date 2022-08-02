import React, { Component } from 'react';
import {Card} from 'semantic-ui-react';
import './App.css';
import lottery from './lottery';
import "semantic-ui-css/semantic.min.css";
import './test.css';
class Home extends Component {
state = {

      players: []
    };
  async componentDidMount() {

    const players = await lottery.methods.getplayers().call();


    this.setState({players});

  }
  renderCampaigns(){
  const items = this.state.players.map(address => {
    return{
      header: address,
      fluid:true
    };
  });
  return <Card.Group items={items}/>;
}



  render() {



    return (


      <div className="bg2">

{this.renderCampaigns()}






            </div>

    );
  }
}

export default Home;
