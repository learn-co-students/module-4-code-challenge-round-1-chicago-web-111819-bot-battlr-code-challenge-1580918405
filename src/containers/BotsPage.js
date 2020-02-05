import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
// import Filter from '../components/Filter'

class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      bots: false,
      showBot: false,
      botView: 'nothing'
    }
  }

  fetchBotInfo = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(bots => this.setBotInfo(bots))
  }

  setBotInfo = (json) => {
    this.setState({
      bots: json
    })
    this.addEnlistedBot()
  }

  addEnlistedBot = () => {
    this.setState(prevState => {
      return {
        bots: prevState.bots.map(bot => {
          return {
            ...bot, enlisted: false
          }
        })
      } 
    })
  }

  toggleEnlist = (newBot) => {
    let newBots = this.state.bots.map(bot => {
      if (newBot.id === bot.id){
        return newBot
      } else {return bot}
    })
    this.setState({
      bots: newBots
    })
  }

  toggleShowBot = (bot) => {
    this.setState(prevState => {
      return {
        showBot: !prevState.showBot,
        botView: bot
      }
    })    
  }

  renderBotArmyBotCollection = () => {
    return (this.state.showBot ? <BotSpecs bot={ this.state.botView } toggleShowBot={ this.toggleShowBot } toggleEnlist={ this.toggleEnlist } /> : (
      <div>
        { this.state.bots ? <YourBotArmy bots = {this.state.bots } toggleEnlist={ this.toggleEnlist } /> : null }
        { this.state.bots ? <BotCollection bots={ this.state.bots } toggleEnlist={ this.toggleEnlist } toggleShowBot={ this.toggleShowBot } /> : null }
      </div>
    ) )
  }


  componentDidMount(){
    this.fetchBotInfo()
  }


  render() {
    return (
      this.renderBotArmyBotCollection()
    );
  }

}

export default BotsPage;
