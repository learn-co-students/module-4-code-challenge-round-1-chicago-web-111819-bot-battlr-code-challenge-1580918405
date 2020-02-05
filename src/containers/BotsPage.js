import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  
  render() {
    return (
      <div>
        < YourBotArmy 
          robotObjs={this.props.yourBotArmyFilteredObjs} 
          toggleEnlistedStatus={this.props.toggleEnlistedStatus}
        />
        < BotCollection 
          robotObjs={this.props.botColletionFilteredObjs} 
          toggleEnlistedStatus={this.props.toggleEnlistedStatus}
        />
      </div>
    );
  }

}

export default BotsPage;
