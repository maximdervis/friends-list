import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';

class App extends React.Component
{
	constructor()
	{
		super();
		this.state = 
		{
			robots: [],
			searchfield: ''
		}

	}

	onSearchFieldChange = (e) =>
	{
		this.setState({searchfield: e.target.value});
	}

	componentDidMount()
	{
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(responce => responce.json())
		.then(users => this.setState({robots: users}));

	}

	render()
	{
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => 
		{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});




		return(
			<div className="tc">
				<div className="header pb3 pt4">
					<h1 className="f1 mb2 mt0">robofriends</h1>
					<SearchBox onSearchFieldChange={this.onSearchFieldChange}/>
				</div>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
				
			</div>
		);
	}
}

export default App;