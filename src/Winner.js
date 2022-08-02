import React, { Component } from 'react';
import { Card} from 'semantic-ui-react';
import './App.css';
import lottery from './lottery';
import "semantic-ui-css/semantic.min.css";
import './test.css';
class Home extends Component {
state = {

      Winners: []
    };
  async componentDidMount() {


    const Winners = await lottery.methods.getwinners().call();



    this.setState({Winners});


  }

  renderCampaigns(){
  const items = this.state.Winners.map(address => {
    return{
      header: address,
      fluid:true
    };
  });
  return <Card.Group items={items}/>;
  }

  render() {



    return (


      <div className="bg3">

{this.renderCampaigns()}






            </div>

    );
  }
}

export default Home;
