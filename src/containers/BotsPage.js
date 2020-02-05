import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const botsUrl = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {

  constructor() {
    super();
    this.state = { bots: [] }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch(botsUrl)
      .then(r => r.json())
      .then(data => {
        this.updateData(data);
      });
  }

  updateData = data => {
    const updatedBots = data.map(bot => { return { ...bot, enlisted: false } });
    this.setState({
      bots: updatedBots
    });
  }

	filterBots = () => {
    let filteredBots = this.state.bots

    // Don't show 'enlisted' bots
    filteredBots = filteredBots.filter(bot => !bot.enlisted)

    return filteredBots;
  }

	filterArmyBots = () => {
    let filteredBots = this.state.bots

    // Show ONLY 'enlisted' bots
    filteredBots = filteredBots.filter(bot => bot.enlisted)

    return filteredBots;
  }
	
	handleBotClick = bot => {
		let updatedBots = this.state.bots.map(b => {
			if(bot.id === b.id) {
				return { ...b, enlisted: true }
			} else {
				return b;
			}
		});

    this.setState({
      bots: updatedBots
		});
	}
	
	handleArmyBotClick = bot => {
		let updatedBots = this.state.bots.map(b => {
			if (bot.id === b.id) {
				return { ...b, enlisted: false }
			} else {
				return b;
			}
		});

    this.setState({
      bots: updatedBots
		});
	}

  render() {
    return (
      <div>
        <YourBotArmy bots={this.filterArmyBots()} handleArmyBotClick={this.handleArmyBotClick} />
        <BotCollection bots={this.filterBots()} handleBotClick={this.handleBotClick} />
      </div>
    );
  }

}

export default BotsPage;
