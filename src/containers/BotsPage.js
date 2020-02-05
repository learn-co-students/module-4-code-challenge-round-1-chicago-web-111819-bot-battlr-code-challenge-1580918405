import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor() {
    super()
    this.state = {
      showPage: false,
      botId: 0
    }
  }

  robotToShow = (id) => {
    return this.props.robots.find(robot => robot.id === id)
  }
  
  botColletionFilteredObjs = () => {
		return this.props.robots.filter(robot => robot.isEnlisted === false)
	}


  renderIndex = () => {
    return (
      <div>
        < YourBotArmy 
          robotObjs={this.props.yourBotArmyFilteredObjs} 
          toggleEnlistedStatus={this.props.toggleEnlistedStatus}
          togglePageView={this.togglePageView}
        />
        < BotCollection 
          robotObjs={this.botColletionFilteredObjs()} 
          toggleEnlistedStatus={this.props.toggleEnlistedStatus}
          togglePageView={this.togglePageView}
        />
      </div>
    )
  }

  renderShowPage = () => {
    return (
      <div>
        < BotSpecs 
          robotObj={this.robotToShow(this.state.botId)} 
          toggleEnlistedStatus={this.props.toggleEnlistedStatus}
          togglePageView={this.togglePageView}
        />
      </div>
    )
  }

  togglePageView = (id) => {
    this.setState(prevState => ({
      showPage: !prevState.showPage,
      botId: id
    }))
  }
  
  render() {
    return (
      <div>
        {this.state.showPage ? this.renderShowPage() : this.renderIndex()}
      </div>
    )
  }

}

export default BotsPage;
