import React, { Component } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import { getArticles } from './services/articles.service';
import Button from './components/Button';

class App extends Component {

	// We retrieve articles from the articles service
	articles = getArticles();

	// We initialize the state
	state = {
		areTabsOpen: false, // Articles are hidden by default
	};

	// This method allows the user to display or hide articles
	handleToggleArticles = () => {
		this.setState((prevState) => ({
			...prevState,
			areTabsOpen: !prevState.areTabsOpen,
		}));
	};

	// This method is used to cancel the articles block closing when the Tabs component is about to be unmounted
	handleCancelCloseArticles = () => {
		this.setState({
			areTabsOpen: true,
		});
	};

	render() {
		return (
			<div className="container">
				<Button type="button" variant={this.state.areTabsOpen ? 'danger' : 'primary'} onClick={ this.handleToggleArticles }>
					{ this.state.areTabsOpen ? 'Close' : 'View'} articles
				</Button>
				{ this.state.areTabsOpen && <Tabs tabs={this.articles} onCancelCloseArticles={ this.handleCancelCloseArticles } /> }
			</div>
		);
	}
}

export default App;