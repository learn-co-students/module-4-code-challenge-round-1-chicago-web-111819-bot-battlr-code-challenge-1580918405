import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: []
		}
	}

	componentDidMount = () => {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then(resp => resp.json())
			.then(robotObjs => {

				const modifiedRobotObjs = robotObjs.map(robotObj => {
					return {...robotObj, isEnlisted: false}
				})

				this.setState({
					robots: modifiedRobotObjs
				})
			})
	}

	botColletionFilteredObjs = () => {
		return this.state.robots.filter(robot => robot.isEnlisted === false)
	}

	yourBotArmyFilteredObjs = () => {
		return this.state.robots.filter(robot => robot.isEnlisted)
	}

	toggleEnlistedStatus = (id) => {
		let robotToUpdate = this.state.robots.find(robot => robot.id === id)

		const updatedRobotObjs = this.state.robots.map(robot => {
			if (robot === robotToUpdate) {
				return {...robot, isEnlisted: !robot.isEnlisted}
			} else {
				return robot
			}
		})

		this.setState({
			robots: updatedRobotObjs
		})
	}

	render() {
		return (
			<div className="App">
				<BotsPage 
					botColletionFilteredObjs={this.botColletionFilteredObjs()} 
					yourBotArmyFilteredObjs={this.yourBotArmyFilteredObjs()} 
					toggleEnlistedStatus={this.toggleEnlistedStatus}
				/>
			</div>
		);
	}
}

export default App;
