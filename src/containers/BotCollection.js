import React from "react";
import BotCard from "../components/BotCard";
import Filter from '../components/Filter'

class BotCollection extends React.Component {
  
	renderBotCard = () => {
		return this.props.bots.map( bot => {
			return bot.enlisted ? null : <BotCard bot={ bot } toggleEnlist={ this.props.toggleEnlist } type='collection' toggleShowBot={ this.props.toggleShowBot } />
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
			<Filter />
    		<div className="row">
			  { this.renderBotCard() }
			  Your Collection of Bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
