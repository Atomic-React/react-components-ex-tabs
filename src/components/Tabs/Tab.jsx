import React, { Component } from 'react';

class Tab extends Component {

	render() {
		const { children, className = '', isActive = false, ...rest } = this.props;

		const isActiveClassName = isActive ? 'tab-button--active' : '';

		return (
			<button className={`tab-button ${isActiveClassName} ${className}`} {...rest}>
				{ children }
			</button>
		);
	}

}

export default Tab;