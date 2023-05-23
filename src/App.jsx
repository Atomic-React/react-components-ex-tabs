import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {

	render() {
		return (
			<div className="container">
				<Button type="button">
					View articles
				</Button>
				<p>
					Tabs with articles should appear here
				</p>
			</div>
		);
	}
}

export default App;