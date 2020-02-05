import React from "react";
import BotArmyCard from "../components/BotArmyCard";

class YourBotArmy extends React.Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
					{this.props.bots.map((bot, i) => {
						return <BotArmyCard bot={bot} key={i} handleArmyBotClick={() => this.props.handleArmyBotClick(bot)} />
					})}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
