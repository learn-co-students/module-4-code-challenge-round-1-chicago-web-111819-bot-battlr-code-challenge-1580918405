import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render() {
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
					{this.props.bots.map((bot, i) => {
						return <BotCard bot={bot} key={i} handleBotClick={() => this.props.handleBotClick(bot)} />
					})}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
