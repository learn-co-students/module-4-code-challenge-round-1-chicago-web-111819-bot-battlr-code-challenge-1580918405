import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

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
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderRobots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
