// With a loader => wait 1 second before loading content
import React, { Component } from 'react';

class TabContent extends Component {

	render() {
		const { children = null, isLoading = true } = this.props;
		return (
			isLoading ?
				<p>Loading tab content...</p>
				:
				<div className="tabs-content">
					{
						children
					}
				</div>
		);
	}

}

export default TabContent;