import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBotArmy = () => {
    return this.props.bots.map(bot => {
      return !bot.enlisted ? null : <BotCard bot={ bot } toggleEnlist={ this.props.toggleEnlist } type='army' />
    })
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            { this.renderBotArmy() }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
