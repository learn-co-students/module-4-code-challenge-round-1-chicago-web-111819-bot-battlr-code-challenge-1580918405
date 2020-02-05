import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	renderRobots = () => {
		return this.props.robotObjs.map(robotObj => {
			return < BotCard 
			key={robotObj.id} 
			robotObj={robotObj} 
			toggleEnlistedStatus={this.props.toggleEnlistedStatus} 
			togglePageView={this.props.togglePageView}
			/>
	  })
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderRobots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
