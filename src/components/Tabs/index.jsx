import React, { Component } from 'react';
import './Tabs.css';
import Tab from './Tab';
import TabContent from './TabContent';
import { getArticleById } from '../../services/articles.service';

class Tabs extends Component {

	// We initialize the state
	state = {
		activeTab: 1, // The default displayed tab is the first one
		currentArticle: null, // By default, there is no article to display
		isLoading: false, // By default, there is not loading state
	};

	// This method allows us to retrieve a single article from the activeTab property in the state
	getArticle = (articleId) => {

		this.setState({ isLoading: true }); // Set the loading state to true

		// Request the article
		getArticleById(articleId)
			.then(article => { // Set the retrieved article in the state's currentArticle property
				this.setState({ currentArticle: article });
			})
			.catch(console.error)
			.finally(() => { // When the request is over, set the loading state to false, even if there is an error
				this.setState({ isLoading: false });
			});
	};

	handleChangeTab = (tabId) => () => {
		// When the user click on a tab, we catch the tabId to set the value in the state
		this.setState({ activeTab: tabId });
		// this.getArticle(tabId); => This is forbidden for this exercise. We should only use the life cycle methods to load the articles.
	};

	componentDidMount() {
		// When the component just did mount, we request the article using the activeTab key in the state (1 by default)
		this.getArticle(this.state.activeTab);
	}

	componentDidUpdate(prevProps, prevState) {
		// When the component did update, we verify if the activeTab property has changed in the state.
		// If the activeTab property has changed, we get the article using the new id.
		if (prevState.activeTab !== this.state.activeTab) {
			this.getArticle(this.state.activeTab);
		}
	}

	componentWillUnmount() {
		// When the component is about to be unmounted, we ask the user if he is sure to close the component.
		// If he is, we do nothing
		// If he is not, we trigger the `onCancelCloseArticles` method from the props to allow the App component to cancel the action
		if (!confirm('Are you sure you want to close articles?')) {
			this.props.onCancelCloseArticles();
		}
	}
	
	render() {

		// We retrieve tabs data from the props
		const { tabs } = this.props;

		return (
			<div className="tabs-container">
				<div className="tabs-buttons">
					{
						// For each tab in tabs, display a Tab button
						tabs.map((tab) => (
							<Tab key={tab.id} isActive={this.state.activeTab === tab.id} onClick={this.handleChangeTab(tab.id)}>{tab.title}</Tab>
						))
					}
				</div>
				<TabContent isLoading={ this.state.isLoading }>
					{
						// If there is not content in the article, display "No content"
						this.state.currentArticle?.content || 'No content'
					}
				</TabContent>
			</div>
		);
	}
}

export default Tabs;