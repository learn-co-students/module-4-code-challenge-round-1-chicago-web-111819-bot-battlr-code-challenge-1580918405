import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor(props){
    super(props)
    
    this.state = {
      bots: []
    }
  }
  
  componentDidMount(){
  fetch ('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then((botsObj) => {
      this.setState({
        bots: botsObj
      })
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        {/* put your components here */}
        <BotCollection bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
